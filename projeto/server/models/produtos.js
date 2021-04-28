import mongoose from 'mongoose';

const produtosSchema = mongoose.Schema({
    codProduto: Number,
    Produto: String,
    section: {
        type: String,
        default: 'Vazio'
    },
    codEstoque: [Number],
    Estoque: [String],
    Unidades: [Number]
});

const produto = mongoose.model('produto', produtosSchema);

export default produto;