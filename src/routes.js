const express = require("express");
const routes = express.Router();

const control = require('./controller/control');

routes.get('/products', control.index);
routes.post('/products', control.store); //para criar algo

module.exports = routes;