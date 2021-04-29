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
    async info(req,res){
        const { _id } = req.params;
        const estoque = await Estoque.findOne({_id});
        res.json(estoque);
    },
    async delete(req,res){
        const { _id } = req.params;
        const estoque = await Estoque.findByIdAndDelete({_id});
        return res.json(estoque);
    }
}