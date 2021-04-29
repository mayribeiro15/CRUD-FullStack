import express from 'express'
import { getEstoques, createEstoque } from '../controllers/estoque.js'
const router = express.Router();

router.get('/', getEstoques);
router.post('/', createEstoque);

export default router;