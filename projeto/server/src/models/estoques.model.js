const mongoose = require('mongoose');

const EstoqueSchema = new mongoose.Schema({
    nomeEstoque: {type: String, requires: true},
    codEstoque: {type: Number, required: true},
},{
    timestamps: true
})

const estoque = mongoose.model('Estoque', EstoqueSchema);
module.exports = estoque;