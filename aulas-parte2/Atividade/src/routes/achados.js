import express, { Router } from 'express'
import { getAchados, createAchados, updateAchados, deleteAchados } from '../controllers/achadoController.js';
import { validateObjeto } from '../middleware/achadoMiddleware.js';

const router = express.Router();

router
    .get('/listar', getAchados)
    .get('/listar/:id', getAchados)
    .post('/registrar', validateObjeto, createAchados)
    .put('/atualizar/:id', updateAchados)
    .delete('/remover/:id', deleteAchados)

export default router