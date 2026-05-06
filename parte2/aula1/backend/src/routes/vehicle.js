import express, { Router } from 'express'
import { VehiclesController } from '../controllers/VehiclesController'

const router = express.Router();

router
    .get("./list", VehiclesController.getCars)
export default router
