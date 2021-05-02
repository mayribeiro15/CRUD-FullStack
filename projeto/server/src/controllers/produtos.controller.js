const { update } = require('../models/produtos.model');
const Produto = require('../models/produtos.model');

module.exports = {
    async list(req,res){
        const produto = await Produto.find().populate('codsEstoque');
        res.json(produto);
    },
    async create(req,res){
        const {nomeProduto, codProduto, numEstoques, codsEstoque, numItens} = req.body;
        let data = {};
        let produto = await Produto.findOne({codProduto});
        if(!produto){
            data = {nomeProduto, codProduto, numEstoques, codsEstoque, numItens};
            produto = await Produto.create(data);
            return res.status(200).json(produto);
        }else{
            return res.status(500).json(produto);
        }
    },
    async info(req,res){
        const { _id } = req.params;
        const produto = await Produto.findOne({_id}).populate('codsEstoque');
        res.json(produto);
    },
    async delete(req,res){
        const { _id } = req.params;
        const produto = await Produto.findByIdAndDelete({_id});
        return res.json(produto);
    },
    async update(req,res){
        const {_id, nomeProduto, codProduto, numEstoques, codsEstoque, numItens} = req.body;
        const data = {nomeProduto, codProduto, numEstoques, codsEstoque, numItens};
        const produto = await Produto.findByIdAndUpdate({_id},data,{new:true});
        res.json(produto);
    }
}