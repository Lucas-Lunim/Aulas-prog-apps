import express, { Router } from 'express'
import { getStorage, createStorage, updateStorage, deleteStorage } from '../controllers/EstoqueController.js';

const router = express.Router();

router
    .get('/storages', getStorage)
    .get('/storages/:id', getStorage)
    .post('/registerSt', createStorage)
    .put('/updateSt/:id', updateStorage)
    .delete('/deleteSt/:id', deleteStorage)

export default router