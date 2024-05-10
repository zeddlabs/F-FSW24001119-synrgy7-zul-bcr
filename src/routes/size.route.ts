import { Router } from "express"
import sizeController from '../controllers/size.controller'

const sizeRouter: Router = Router()

sizeRouter.get('/sizes', sizeController.index)
sizeRouter.get('/sizes/:id', sizeController.show)
sizeRouter.post('/sizes', sizeController.store)
sizeRouter.put('/sizes/:id', sizeController.update)
sizeRouter.delete('/sizes/:id', sizeController.destroy)

export default sizeRouter