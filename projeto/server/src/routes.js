const express = require('express');

const routes = express.Router();

const Estoque = require('./controllers/estoques.controller')
const Produto = require('./controllers/produtos.controller')

//Rotas de Estoques
routes.get('/api/estoques', Estoque.list);
routes.post('/api/estoques', Estoque.create);
routes.get('/api/estoques.info/:_id', Estoque.info);
routes.delete('/api/estoques/:_id', Estoque.delete);
routes.put('/api/estoques', Estoque.update);

//Rotas de Produto
routes.get('/api/produtos', Produto.list);
routes.post('/api/produtos', Produto.create);
routes.get('/api/produtos.info/:_id', Produto.info);
routes.delete('/api/produtos/:_id', Produto.delete);
routes.put('/api/produtos', Produto.update);

module.exports = routes;
