import express from 'express'
import { getProdutos, createProdutos } from '../controllers/produtos.js'
import produto from '../models/produtos.js';
const router = express.Router();

router.get('/', getProdutos);
router.post('/', createProdutos);

export default router;