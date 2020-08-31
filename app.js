const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));

app.use('/api/bill', require('./routes/bill.routes'));

const PORT = config.get('port') || 5000;

async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`API app started on port ${PORT}...`));
    } catch (e) {
       console.log('Server error', e.message);
       process.exit(1);
    }
}

start();