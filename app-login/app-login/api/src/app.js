require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const routeLogin = require('./routes/rtLogin');

class App {
  constructor() {
    this.app = express();
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.route();
  }
  route() {
    this.app.use('/auth', routeLogin.route)
  }
};


module.exports = new App().app;