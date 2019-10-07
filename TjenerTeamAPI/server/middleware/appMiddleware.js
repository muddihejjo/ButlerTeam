// Morgan is an log library
import morgan from 'morgan';
import bodyParser from 'body-parser';
// Cross origin resource sharing - makes it possible to call localhosts..
import cors from 'cors';
import override from 'method-override';
// setup global middleware here

module.exports = (app) => {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(override());
  };
