import mongoose from 'mongoose';

const produtosSchema = mongoose.Schema({
    codProduto: Number,
    nomeProduto: String,
    section: {
        type: String,
        default: 'Vazio'
    },
    codEstoque: [Number],
    Unidades: [Number]
});

const produto = mongoose.model('produto', produtosSchema);

export default produto;