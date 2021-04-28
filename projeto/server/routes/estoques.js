import express from 'express'
import { getEstoques, createEstoques } from '../controllers/estoques.js'
import estoque from '../models/estoques.js';
const router = express.Router();

router.get('/', getEstoques);
router.post('/', createEstoques);

export default router;