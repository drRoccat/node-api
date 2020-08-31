const {Router} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();



router.post('/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Min 6').isLength({ min: 6 })
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

        const {email, password}  = req.body;

        const candidate =  await User.findOne({ email });

        if (candidate) {
            return res.status(400).json({ message: 'Error, user exist!'  });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email: email, password: hashedPassword});

        await user.save();
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

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при входе в систему'
                })
            }

            const {email, password} = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            );

            res.json({ token, userId: user.id });

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    });

router.get('/user/:email',
    async (req, res) => {

        try {

            const {email} = req.params;
            const user = await User.findOne({email});
            console.log(email);

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }


            //let decoded = jwt.verify(user[0].password, config.get('jwtSecret'));
            //console.log(decoded.foo);

            res.send(user);

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
    );

module.exports = router;