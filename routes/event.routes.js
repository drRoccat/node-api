const {Router} = require('express');
const Event = require('../models/Event');
//const EventList = require('../models/EventList');
const Category = require('../models/Category');
const Project = require('../models/Project');
const Bill = require('../models/Bill');
const router = Router();
const ObjectId = require('mongoose').Types.ObjectId;
//const AuditTask = require('./AuditTask')


router.post('/',
    async (req, res) => {
        try {
            const userId = req.headers.user;
            const {type, amount, project, category, date, bill, description}  = req.body;
            console.log(req.body);

            let cat = await Category.findOne({name: category});
            let pro = await Project.findOne({name: project});
            let bi = await Bill.findOne({currency: bill});

            const event = new Event(
              { type: type,
                amount: amount,
                project: pro._id,
                category: cat._id,
                date: date,
                bill: bill,
                description: description,
                userId: userId
              });

            if (type === 'INCOME') {
              cat.income = cat.income + amount;

              cat.save();

              pro.earnings = pro.earnings + amount;
              pro.profit = pro.earnings - pro.consumption;
              pro.relevance = (pro.profit / pro.earnings) * 100;

              pro.save();

              bi.value = bi.value + amount;

              bi.save();
            } else if (type === 'OUTCOME') {
              cat.outcome = cat.outcome + amount;

              cat.save();

              pro.consumption = pro.consumption + amount;
              pro.profit = pro.earnings - pro.consumption;
              pro.relevance = (pro.profit / pro.earnings) * 100;

              pro.save();

              bi.value = bi.value - amount;

              bi.save();
            } else {
              console.log('Error');
            }



            await event.save();
            res.status(201).json({ message: 'Event has been created!' });

        } catch (e) {
            res.status(500).json({ message: 'Error, try again!' });
        }
    });


router.get('/',
    async (req, res) => {

        try {
            const userId = req.headers.user;
            const event = await Event.find({userId: userId }).populate('category').populate('project');

            class EventList {
              constructor(x) {
                this._id = x._id;
                this.type = x.type;
                this.amount = x.amount;
                this.project = x.project;
                this.category = x.category;
                this.date = x.date;
                this.bill = x.bill;
                this.description = x.description;
                this.userId = x.userId;
              }
            }

            const eventList = await event.map(function(x) {
              const ev = new EventList(x);
              ev.project = ev.project.name;
              ev.category = ev.category.name;
              return ev;
            });

            if (!eventList) {
                return res.status(400).json({ message: 'Not found' })
            }

            res.send(eventList);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.get('/:id',
    async (req, res) => {

        try {

            const id = req.params.id;
            const event = await Event.findOne({id});

            if (!event) {
                return res.status(400).json({ message: 'Not found'  })
            }

            res.send(event);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.get('/pro/:id',
    async (req, res) => {

        try {

            const id = req.params.id;
            const event = await Event.find({project: new ObjectId(id)});

            class EventList {
              constructor(x) {
                this._id = x._id;
                this.type = x.type;
                this.amount = x.amount;
                this.project = x.project;
                this.category = x.category;
                this.date = x.date;
                this.bill = x.bill;
                this.description = x.description;
                this.userId = x.userId;
              }
            }

            let eventList = await event.map(x => new EventList(x));

            for (let i = 0; i < event.length; i++) {
            eventList[i].category = (await Event.findOne({_id: event[i]._id}).populate('category').exec()).category.name;
            eventList[i].project = (await Event.findOne({_id: event[i]._id}).populate('project').exec()).project.name;
            }

            if (!eventList) {
                return res.status(400).json({ message: 'Not found'  })
            }

            res.send(eventList);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.delete('/:id',
    async (req, res) => {

        try {

          const id = req.params.id;

          const deleteResult = await Event.findByIdAndDelete(id);

          let cat = await Category.findById(deleteResult.category);
          let pro = await Project.findById(deleteResult.project);
          let bi = await Bill.findOne({currency: deleteResult.bill});


          if (deleteResult.type === 'INCOME') {
            cat.income = (cat.income - deleteResult.amount);

            cat.save();

            pro.earnings = pro.earnings - deleteResult.amount;
            pro.profit = pro.earnings - pro.consumption;
            pro.relevance = (pro.profit / pro.earnings) * 100;

            pro.save();

            bi.value = bi.value - deleteResult.amount;

            bi.save();
          } else if (deleteResult.type === 'OUTCOME') {
            cat.outcome = (cat.outcome - deleteResult.amount);

            cat.save();

            pro.consumption = (pro.consumption - deleteResult.amount);
            pro.profit = (pro.earnings - pro.consumption);
            pro.relevance = (pro.profit / pro.earnings) * 100;

            pro.save();

            bi.value = bi.value + deleteResult.amount;

            bi.save();
          } else {
            console.log('Error');
          }


          if (deleteResult != undefined) {
              return res.status(200).json({ message: 'Event has been deleted!'  })
          }

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }

    }
);


router.put('/:id',
    async (req, res) => {

        const id = req.params.id;
        const eventData = req.body;

        eventData.category = (await Category.find({name: eventData.category}))[0]._id;
        eventData.project = (await Project.find({name: eventData.project}))[0]._id;

        const modificationResult = await Event.replaceOne({_id: id}, eventData);

        if (modificationResult.n) {
            const modifiedEvent = await Event.findOne({id});
            res.send(modifiedEvent);
        } else {
            return res.status(400).json({message: 'Not found'})

        }

    }
);

module.exports = router;
