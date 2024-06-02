import { Router } from "express"
import controllers from "../controllers"
import upload from "../middlewares/multer.middleware"
import { check, checkSchema } from "express-validator"
import { 
  createCarValidationSchema, 
  updateCarValidationSchema 
} from "../schemas/car.schema"

const carRouter: Router = Router()

carRouter.route('/cars')
  .get(controllers.api.v1.carController.index)
  .post(
    upload.single('image'),
    check('image').custom((value, { req }) => {
      if (!req.file) {
        throw new Error('Image is required')
      }

      return true
    }),
    checkSchema(createCarValidationSchema),
    controllers.api.v1.carController.store
  )

carRouter.route('/cars/:id')
  .get(controllers.api.v1.carController.show)
  .put(
    upload.single('image'),
    checkSchema(updateCarValidationSchema),
    controllers.api.v1.carController.update
  )
  .delete(controllers.api.v1.carController.destroy)

export default carRouter