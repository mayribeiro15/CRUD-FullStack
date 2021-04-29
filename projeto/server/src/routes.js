const express = require('express');

const routes = express.Router();

const Estoque = require('./controllers/estoques.controller')

//Rotas de Estoques
routes.get('/api/estoques', Estoque.list);
routes.post('/api/estoques', Estoque.create);

module.exports = routes;
