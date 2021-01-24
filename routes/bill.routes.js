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

            const userId = req.headers.user;

            const bill = await Bill.find({userId: userId});
            console.log(userId);

            if (!bill) {
                return res.status(400).json({ message: 'Not found' })
            }

            res.send(bill);

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
);

router.put('/',
    async (req, res) => {

        const billData = req.body;
        console.log(billData);

        const modificationResult = await Bill.replaceOne({currency: billData.currency}, billData);

        if (modificationResult.n) {
            const modifiedBill = await Bill.find();
            res.send(modifiedBill);
        } else {
            return res.status(400).json({message: 'Not found'})
        }

    }
);

router.put('/transfer',
    async (req, res) => {

      try {

        const transferData = req.body;

        const fromBill = await Bill.findById(transferData.from._id);
        const toBill = await Bill.findById(transferData.to._id);

        fromBill.value = fromBill.value - transferData.value;

        fromBill.save();

        if (fromBill.currency === 'PLN') {
          toBill.value = toBill.value + (transferData.value * transferData.rate);

          toBill.save();
        } else if (fromBill.currency === 'EUR') {
          toBill.value = toBill.value + (transferData.value / transferData.rate);
          toBill.save();
        }

        res.status(200).json({ message: 'Ok' });

      } catch (e) {
        res.status(500).json({ message: 'Error' })
      }
    }
);

module.exports = router;
