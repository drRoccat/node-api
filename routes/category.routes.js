const {Router} = require('express');
const Category = require('../models/Category');
const router = Router();


router.post('/',
    async (req, res) => {
        try {

            const {name, capacity}  = req.body;


            const category = new Category({ id:3, name: name, capacity: capacity});

            await category.save();
            res.status(201).json({ message: 'Category has been created!' });

        } catch (e) {
            res.status(500).json({ message: 'Error, try again!' });
        }
    });


router.get('/',
    async (req, res) => {

        try {

            const category = await Category.find();

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
            const category = await Category.findOne({id});

            if (!category) {
                return res.status(400).json({ message: 'Not found'  })
            }

            res.send(category);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.put('/:id',
    async (req, res) => {

        const id = req.params.id;
        const postData = req.body;

        const modificationResult = await Category.replaceOne({id: id}, postData);

        if (modificationResult.n) {
            const modifiedPost = await Category.findOne({id});
            res.send(modifiedPost);
        } else {
            return res.status(400).json({message: 'Not found'})
        }

    }
);

module.exports = router;
