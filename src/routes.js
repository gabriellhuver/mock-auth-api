const { Router } = require('express');
const routes = Router();


const AuthorizationController = require('./controllers/AuthorizationController');

routes.post('/transactions/authorization', AuthorizationController.store);

module.exports = routes;
