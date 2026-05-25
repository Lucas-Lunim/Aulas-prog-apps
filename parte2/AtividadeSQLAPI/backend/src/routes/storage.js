import express, { Router } from 'express'
import { getStorage, createStorage, updateStorage, deleteStorage } from '../controllers/EstoqueController.js';
import { validateCreatePeca,validateGetPecaById,validateUpdatePeca, validateDeletePeca } from '../middleware/estoqueMiddleware.js';

const router = express.Router();

router
    .get('/storage', getStorage)
    .get('/storages/:id', validateGetPecaById, getStorage)
    .post('/registerSt', validateCreatePeca, createStorage)
    .put('/updateSt/:id', validateUpdatePeca, updateStorage)
    .delete('/deleteSt/:id', validateDeletePeca, deleteStorage)

export default router