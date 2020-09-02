const {Router} = require('express');
const Event = require('../models/Event');
const router = Router();


router.post('/',
    async (req, res) => {
        try {

            const {type, amount, category, date, description}  = req.body;


            const event = new Event({ id: id ,type: type, amount: amount, category: category, date: date, description: description});

            await event.save();
            res.status(201).json({ message: 'Event has been created!' });

        } catch (e) {
            res.status(500).json({ message: 'Error, try again!' });
        }
    });


router.get('/',
    async (req, res) => {

        try {

            const event = await Event.find();

            if (!event) {
                return res.status(400).json({ message: 'Not found' })
            }

            res.send(event);

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

module.exports = router;
