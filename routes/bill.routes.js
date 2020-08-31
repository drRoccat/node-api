const {Router} = require('express');
const Bill = require('../models/Bill');
const router = Router();


router.post('/',
    async (req, res) => {
        try {

            const {value, currency}  = req.body;


            const bill = new Bill({ value: value, currency: currency});

            await bill.save();
            res.status(201).json({ message: 'Bill has been created!' });

        } catch (e) {
            res.status(500).json({ message: 'Error, try again!' });
        }
    });


router.get('/',
    async (req, res) => {

        try {

            const bill = await Bill.find();

            if (!bill) {
                return res.status(400).json({ message: 'Not found' })
            }

            res.send(bill[0]);
            console.log(bill[0]);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

module.exports = router;
