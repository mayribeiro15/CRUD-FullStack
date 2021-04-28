export const getProdutos = async (req, res)=> {
    try {
        const allProdutos = await produto.find();
        res.status(200).json(allProdutos);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createProdutos = async (req, res)=> {
    const produto = req.body;
    const newProduto = new produto(produto);
    try {
        await newProduto.save();
        res.status(201).json(newProduto);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}