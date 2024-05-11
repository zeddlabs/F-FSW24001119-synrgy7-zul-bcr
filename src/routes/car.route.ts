import { Router } from "express"
import carController from '../controllers/car.controller'
import upload from "../middlewares/multer.middleware"

const carRouter: Router = Router()

carRouter.get('/cars', carController.index)
carRouter.get('/cars/:id', carController.show)
carRouter.post('/cars', upload.single('image'), carController.store)
carRouter.put('/cars/:id', upload.single('image'), carController.update)
carRouter.delete('/cars/:id', carController.destroy)

export default carRouter