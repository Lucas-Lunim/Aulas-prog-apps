import express, { Router } from 'express'
import { getFun, createFun, updateFun, deleteFun ,getFunSetor} from '../controllers/funController.js';
import {validateCreateFun,validateUpdateFun, validateDeleteFun } from '../middleware/funMiddleware.js';

const router = express.Router();

router
    .get('/funcionario', getFun)
    .get('/funcionarioSetor', getFunSetor)
    .post('/funcionarioPost', validateCreateFun, createFun)
    .put('/funcionarioPut/:id', validateUpdateFun, updateFun)
    .delete('/funcionarioDelete/:id', validateDeleteFun, deleteFun)

export default router