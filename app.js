const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const rjwt = require('restify-jwt-community');
const path = require('path');


const app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, User');
    next();
};

app.use(allowCrossDomain);

app.use(express.json({ extended: true }));

//app.use(express.static('dist'));

app.use(rjwt({secret: config.get('jwtSecret')}).unless({path: ['/api/auth/register', '/api/auth/login']}));

app.use('/api/auth', require('./routes/auth.routes'));

app.use('/api/bill', require('./routes/bill.routes'));

app.use('/api/categories', require('./routes/category.routes'));

app.use('/api/events', require('./routes/event.routes'));

app.use('/api/projects', require('./routes/project.routes'));


if (process.env.NODE_ENV ===) {
  app.use('/', express.static(path.join(__dirname, 'client', 'dist', 'MoneyManager')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'MoneyManager', 'index.html'))
  });
}


const PORT = config.get('port') || 5000;

async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        //app.listen(PORT, () => console.log(`API app started on port ${PORT}...`));
        app.listen(5000, '0.0.0.0', () => console.log(`API app started on port ${PORT}...`));
    } catch (e) {
       console.log('Server error', e.message);
       process.exit(1);
    }
}

start();
