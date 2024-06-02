import { Router } from "express"
import controllers from "../controllers"
import upload from "../middlewares/multer.middleware"
import { check, checkSchema } from "express-validator"
import { signInValidationSchema, signUpValidationSchema } from "../schemas/auth.schema"

const authRouter: Router = Router()

authRouter.route('/auth/sign-in')
  .post(
    checkSchema(signInValidationSchema),
    controllers.api.v1.authController.signIn
  )

authRouter.route('/auth/sign-up')
  .post(
    upload.single('avatar'),
    check('avatar').custom((value, { req }) => {
      if (!req.file) {
        throw new Error('Avatar is required')
      }

      return true
    }),
    checkSchema(signUpValidationSchema),
    controllers.api.v1.authController.signUp
  )

export default authRouter