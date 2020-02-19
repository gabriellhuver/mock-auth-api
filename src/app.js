require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
});
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const morgan = require('morgan')


class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(morgan('combined'))
  }
  routes() {
    this.express.use(routes);
  }
}

module.exports = new AppController().express;
