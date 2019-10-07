import express from 'express';
import api from './api/api';
import config from './config/config';
import logger from'./util/logger';
import auth from './auth/routes';
// db.url is different depending on NODE_ENV
const moongose = require('mongoose');
const app = express();

moongose.set('useCreateIndex', true);
moongose.connect(config.db.url, { useNewUrlParser: true });

if (config.seed) {
    require('./util/seed');
}

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api', api);
app.use('/auth', auth);
// set up global error handling

app.use(function(err, req, res) {
    // if error thrown from jwt validation check
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token');
      return;
    }

    logger.error(err.stack);
    res.status(500).send('Oops');
  });

  // export the app for testing
  module.exports = app;
