const {Router} = require('express');
const Project = require('../models/Project');
const Category = require('../models/Category');
const router = Router();


router.post('/',
    async (req, res) => {
        try {
            const userId = req.headers.user;
            const {name, earnings, consumption, profit, plannedProfit, relevance, currency, active}  = req.body;
            console.log(req.body);


            const project = new Project(
              { name: name,
                earnings: earnings,
                consumption: consumption,
                profit: profit,
                plannedProfit: plannedProfit,
                relevance: relevance,
                currency: currency,
                active: active,
                userId: userId
              }
            );

            await project.save();
            res.status(201).json({ message: 'Project has been created!' });

        } catch (e) {
            res.status(500).json({ message: 'Error, try again!' });
        }
    });


router.get('/',
    async (req, res) => {

        try {
            const userId = req.headers.user;
            const project = await Project.find({userId: userId});

            if (!project) {
                return res.status(400).json({ message: 'Not found' })
            }

            res.send(project);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.get('/active',
    async (req, res) => {

        try {
            const userId = req.headers.user;
            const project = await Project.find({active: true, userId: userId});

            if (!project) {
                return res.status(400).json({ message: 'Not found' })
            }

            res.send(project);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.get('/:id',
    async (req, res) => {

        try {

            const id = req.params.id;
            const project = await Project.findById(id);

            if (!project) {
                return res.status(400).json({ message: 'Not found'  })
            }

            res.send(project);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);


router.put('/:id',
    async (req, res) => {

        const projectData = req.body;
        const id = req.params.id;

        projectData.profit = projectData.earnings - projectData.consumption;
        if(projectData.earnings !== 0) {
          projectData.relevance = (projectData.profit / projectData.earnings) * 100;
        }

        const modificationResult = await Project.replaceOne({_id: id}, projectData);

        if (modificationResult.n) {
            const modifiedProject = await Project.findOne({id});
            res.send(modifiedProject);
        } else {
            return res.status(400).json({message: 'Not found'})
        }

    }
);

router.delete('/:id',
    async (req, res) => {

        try {

          const id = req.params.id;

          const deleteResult = await Project.findByIdAndDelete(id);
          await Category.deleteMany({projectId: id});

          if (deleteResult != undefined) {
              return res.status(200).json({ message: 'Project has been deleted!'  })
          }

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }

    }
);

module.exports = router;
