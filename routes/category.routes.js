const {Router} = require('express');
const Category = require('../models/Category');
const Project = require('../models/Project');
const router = Router();


router.post('/',
    async (req, res) => {
        try {
            const userId = req.headers.user;
            const {name, income, outcome, projectId}  = req.body;


            const category = new Category({name: name, income: income, outcome: outcome, projectId: projectId, userId: userId});

            await category.save();
            res.status(201).json({ message: 'Category has been created!' });

        } catch (e) {
            res.status(500).json({ message: 'Error, try again!' });
        }
    });


router.get('/',
    async (req, res) => {

        try {
            const userId = req.headers.user;
            const category = await Category.find({userId: userId});

            if (!category) {
                return res.status(400).json({ message: 'Not found' })
            }

            res.send(category);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.get('/:id',
    async (req, res) => {

        try {

            const id = req.params.id;
            const category = await Category.findById(id);

            if (!category) {
                return res.status(400).json({ message: 'Not found'  })
            }

            res.send(category);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.get('/pro/:id',
    async (req, res) => {

        try {

            const id = req.params.id;
            const category = await Category.find({projectId: id});
            // console.log(category);

            if (!category) {
                return res.status(400).json({ message: 'Not found'  })
            }

            res.send(category);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.delete('/:id',
    async (req, res) => {

        try {

          const id = req.params.id;

          const deleteResult = await Category.findByIdAndDelete(id);

          if (deleteResult != undefined) {
              return res.status(200).json({ message: 'Category has been deleted!'  })
          }

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }

    }
);

router.put('/:id',
    async (req, res) => {

        const id = req.params.id;
        const categoryData = req.body;

        const modificationResult = await Category.replaceOne({_id: id}, categoryData);

        if (modificationResult.n) {
            const modifiedCategory = await Category.findOne({id});
            res.send(modifiedCategory);
        } else {
            return res.status(400).json({message: 'Not found'})
        }

    }
);

module.exports = router;
