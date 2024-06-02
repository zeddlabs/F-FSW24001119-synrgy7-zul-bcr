import { Router } from "express"
import controllers from "../controllers"
import upload from "../middlewares/multer.middleware"
import { check, checkSchema } from "express-validator"
import { 
  createCarValidationSchema, 
  updateCarValidationSchema 
} from "../schemas/car.schema"
import { isAdmin, jwtValidation } from "../middlewares/auth.middleware"

const carRouter: Router = Router()

carRouter.route('/cars')
  .get(controllers.api.v1.carController.index)
  .post(
    jwtValidation as any,
    isAdmin as any,
    upload.single('image'),
    check('image').custom((value, { req }) => {
      if (!req.file) {
        throw new Error('Image is required')
      }

      return true
    }),
    checkSchema(createCarValidationSchema),
    controllers.api.v1.carController.store as any
  )

carRouter.route('/cars/:id')
  .get(controllers.api.v1.carController.show)
  .put(
    jwtValidation as any,
    isAdmin as any,
    upload.single('image'),
    checkSchema(updateCarValidationSchema),
    controllers.api.v1.carController.update as any
  )
  .delete(
    jwtValidation as any,
    isAdmin as any,
    controllers.api.v1.carController.destroy as any
  )

export default carRouter