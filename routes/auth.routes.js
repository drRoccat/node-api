const {Router} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const Bill = require('../models/Bill');
const router = Router();



router.post('/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Min 6').isLength({ min: 6 }),
        check('name', 'Min 3').isLength({ min: 3 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            })
        }

        const {email, password, name}  = req.body;

        const candidate =  await User.findOne({ email });

        if (candidate) {
            return res.status(400).json({ message: 'Error, user exist!'  });
        }

        //const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email: email, password: password, name: name});

        await user.save();

        const newUser = await User.findOne({ email: email, password: password, name: name});
        console.log(newUser);

        const billPln = new Bill({ value: 0, currency: "PLN", userId: newUser._id});
        console.log(billPln);
        await billPln.save();

        const billEur = new Bill({ value: 0, currency: "EUR", userId: newUser._id});
        await billEur.save();
        console.log(billEur);


        res.status(201).json({ message: 'User has been created!' });

    } catch (e) {
        res.status(500).json({ message: 'Error, try again!' });
    }
});

router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            /*if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при входе в систему'
                })
            }*/

            const {email, password} = req.body;

            const user = await User.findOne({ email });
            console.log(user);

            if (!user) {
                return res.status(401).json({ message: 'User is not found!' })
            }

            //const isMatch = await bcrypt.compare(password, user.password);

            if (password !== user.password) {
                return res.status(401).json({ message: 'Invalid password, please try again!' })
            }

            const token = jwt.sign(
                user.toJSON(),
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            );
            // console.log(config.get('jwtSecret'));

            res.json({ token, userId: user.id });

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    });

router.get('/users',
    async (req, res) => {

        try {

            const email = req.query.email;
            const user = await User.findOne({email});
            console.log(email);

            if (!user) {
                return res.send(null);
                //res.status(400).json({ message: 'Пользователь не найден' })
            }


            //let decoded = jwt.verify(user[0].password, config.get('jwtSecret'));
            //console.log(decoded.foo);

            res.send(
                {
                    email : user.email,
                    password: user.password,
                    name: user.name
                }
            );

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
    );

module.exports = router;
