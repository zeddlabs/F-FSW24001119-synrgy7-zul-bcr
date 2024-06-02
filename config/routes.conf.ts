import { Router } from "express"
import carRouter from "../app/routes/car.route"
import sizeRouter from "../app/routes/size.route"
import userRouter from "../app/routes/user.route"
import authRouter from "../app/routes/auth.route"

const apiRouter: Router = Router()

apiRouter.use('/api/v1', carRouter)
apiRouter.use('/api/v1', sizeRouter)
apiRouter.use('/api/v1', userRouter)
apiRouter.use('/api/v1', authRouter)

export default apiRouter