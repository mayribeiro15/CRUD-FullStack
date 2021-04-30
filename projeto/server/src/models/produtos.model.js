const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nomeProduto: String,
    codProduto: Number,
    numEstoques: Number,
    numItensTotal: {type: Number, default:0},
    codsEstoque: [Number],
    numItens: [Number]
},{
    timestamps: true
})

const produto = mongoose.model('Produto', DataSchema);
module.exports = produto;