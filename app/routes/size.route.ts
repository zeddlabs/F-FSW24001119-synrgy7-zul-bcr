import { Router } from "express"
import controllers from "../controllers"
import { checkSchema } from "express-validator"
import { 
  createSizeValidationSchema, 
  updateSizeValidationSchema 
} from "../schemas/size.schema"

const sizeRouter: Router = Router()

sizeRouter.route('/sizes')
  .get(controllers.api.v1.sizeController.index)
  .post(
    checkSchema(createSizeValidationSchema), 
    controllers.api.v1.sizeController.store
  )

sizeRouter.route('/sizes/:id')
  .get(controllers.api.v1.sizeController.show)
  .put(
    checkSchema(updateSizeValidationSchema), 
    controllers.api.v1.sizeController.update
  )
  .delete(controllers.api.v1.sizeController.destroy)

export default sizeRouter