const route = require('express').Router();
const ctLogin = require('../controller/ctLogin');


route.post('/register', ctLogin.createUser);
route.post('/login', ctLogin.logUser);

module.exports = {
  route
};