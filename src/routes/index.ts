import { Router } from "express"
import carRouter from "./car.route"
import sizeRouter from "./size.route"

const router: Router = Router()

router.use('/api/v1', carRouter)
router.use('/api/v1', sizeRouter)

export default router