import { Router } from "express"
import controllers from "../controllers"
import upload from "../middlewares/multer.middleware"
import { check, checkSchema } from "express-validator"
import { 
  createUserValidationSchema, 
  updateUserValidationSchema 
} from "../schemas/user.schema"

const userRouter: Router = Router()

userRouter.route('/users')
  .get(controllers.api.v1.userController.index)
  .post(
    upload.single('avatar'),
    check('avatar').custom((value, { req }) => {
      if (!req.file) {
        throw new Error('Avatar is required')
      }

      return true
    }),
    checkSchema(createUserValidationSchema),
    controllers.api.v1.userController.store
  )

userRouter.route('/users/:id')
  .get(controllers.api.v1.userController.show)
  .put(
    upload.single('avatar'),
    checkSchema(updateUserValidationSchema),
    controllers.api.v1.userController.update
  )
  .delete(controllers.api.v1.userController.destroy)

export default userRouter