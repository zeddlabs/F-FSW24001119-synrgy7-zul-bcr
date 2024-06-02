import { Router } from "express"
import carRouter from "../app/routes/car.route"
import sizeRouter from "../app/routes/size.route"

const apiRouter: Router = Router()

apiRouter.use('/api/v1', carRouter)
apiRouter.use('/api/v1', sizeRouter)

export default apiRouter