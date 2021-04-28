export const getEstoques = async (req, res)=> {
    try {
        const allEstoques = await estoque.find();
        res.status(200).json(allEstoques);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createEstoques = async (req, res)=> {
    const estoque = req.body;
    const newEstoque = new estoque(estoque);
    try {
        await newEstoque.save();
        res.status(201).json(newEstoque);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}