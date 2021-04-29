const Estoque = require('../models/estoques.model');

module.exports = {
    async list(req,res){
        const estoque = await Estoque.find();
        res.json(estoque);
    },
    async create(req,res){
        const {nomeEstoque, codEstoque, numProdutos, numItens} = req.body;
        let data = {};
        let estoque = await Estoque.findOne({codEstoque});
        if(!estoque){
            data = {nomeEstoque, codEstoque, numProdutos, numItens};
            estoque = await Estoque.create(data);
            return res.status(200).json(estoque);
        }else{
            return res.status(500).json(estoque);
        }
    },
}