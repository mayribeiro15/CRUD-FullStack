const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nomeEstoque: String,
    codEstoque: Number,
    numProdutos: {type: Number, default:0},
    numItens: {type:Number, default:0},
},{
    timestamps: true
})

const estoque = mongoose.model('Estoque', DataSchema);
module.exports = estoque;