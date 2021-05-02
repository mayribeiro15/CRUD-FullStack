const mongoose = require('mongoose');
const Estoque = require('../models/estoques.model');

const ProdutoSchema = new mongoose.Schema({
    nomeProduto: {type: String, requires: true},
    codProduto: {type: Number, required: true},
    numEstoques: {type: Number, default:0},
    codsEstoque: {type: mongoose.ObjectId, ref: Estoque},
    numItens: {type: Number, default:0}
},{
    timestamps: true
})

const produto = mongoose.model('Produto', ProdutoSchema);
module.exports = produto;