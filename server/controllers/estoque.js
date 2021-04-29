import EstoqueData from '../models/estoque.js';

export const getEstoques = async (req, res)=> {
    try {
        const allEstoques = await EstoqueData.find();
        res.status(200).json(allEstoques);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createEstoque = async (req, res)=> {
    const estoque = req.body;
    const newEstoque = new EstoqueData(estoque);
    try {
        await newEstoque.save();
        res.status(201).json(newEstoque);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}