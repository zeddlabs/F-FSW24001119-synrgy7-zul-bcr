import { Router } from "express"
import controllers from "../controllers"
import { checkSchema } from "express-validator"
import { 
  createSizeValidationSchema, 
  updateSizeValidationSchema 
} from "../schemas/size.schema"
import { isAdmin, jwtValidation } from "../middlewares/auth.middleware"

const sizeRouter: Router = Router()

sizeRouter.route('/sizes')
  .get(controllers.api.v1.sizeController.index)
  .post(
    jwtValidation as any,
    isAdmin as any,
    checkSchema(createSizeValidationSchema), 
    controllers.api.v1.sizeController.store
  )

sizeRouter.route('/sizes/:id')
  .get(controllers.api.v1.sizeController.show)
  .put(
    jwtValidation as any,
    isAdmin as any,
    checkSchema(updateSizeValidationSchema), 
    controllers.api.v1.sizeController.update
  )
  .delete(
    jwtValidation as any,
    isAdmin as any,
    controllers.api.v1.sizeController.destroy
  )

export default sizeRouter