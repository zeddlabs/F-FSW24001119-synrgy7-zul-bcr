import { Router } from "express"
import carRouter from "./car.route"

const router: Router = Router()

router.use('/api/v1', carRouter)

export default router