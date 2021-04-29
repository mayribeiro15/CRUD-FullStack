import mongoose from 'mongoose';

const estoqueSchema = mongoose.Schema({
    codEstoque: Number,
    nomeEstoque: String,
    numProdutos: {
        type: Number,
        default: 0
    },
    numItens: {
        type: Number,
        default: 0
    }
});

const estoque = mongoose.model('estoque', estoqueSchema);

export default estoque;