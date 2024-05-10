import { Router } from "express"
import carController from '../controllers/car.controller'

const carRouter: Router = Router()

carRouter.get('/cars', carController.index)
carRouter.get('/cars/:id', carController.show)
carRouter.post('/cars', carController.store)
carRouter.put('/cars/:id', carController.update)
carRouter.delete('/cars/:id', carController.destroy)

export default carRouter