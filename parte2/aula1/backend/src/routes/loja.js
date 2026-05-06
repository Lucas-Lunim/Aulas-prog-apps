import express, { response, Router } from 'express'
import { createPedido, deletePedido, getPedido, updatePedido } from '../controllers/LojaController.js'

const router = express.Router();

router
    .get('/view', getPedido)
    .post("/create", createPedido)
    .put("/update/:id", updatePedido)
    .delete("/delete/:id", deletePedido)


export default router