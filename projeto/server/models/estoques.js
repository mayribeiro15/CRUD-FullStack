import mongoose from 'mongoose';

const estoquesSchema = mongoose.Schema({
    codEstoque: Number,
    nomeEstoque: String,
    section: {
        type: String,
        default: 'Vazio'
    },
    numProdutos: Number,
    unidProdutos: Number,
});

const estoque = mongoose.model('estoque', estoquesSchema);

export default estoque;