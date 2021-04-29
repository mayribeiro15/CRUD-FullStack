const express = require('express');

const routes = express.Router();

const Estoque = require('./controllers/estoques.controller')

//Rotas de Estoques
routes.get('/api/estoques', Estoque.list);
routes.post('/api/estoques', Estoque.create);
routes.get('/api/estoques.info/:_id', Estoque.info);
routes.delete('/api/estoques/:_id', Estoque.delete);

module.exports = routes;
