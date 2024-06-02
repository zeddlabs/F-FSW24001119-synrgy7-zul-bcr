import 'dotenv/config'
import { Request, Response } from "express"
import { validationResult } from "express-validator"
import userService from "../../../services/user.service"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const signIn = async (req: Request, res: Response): Promise<any> => {
  try {
    const validateRequest = validationResult(req)
    if (!validateRequest.isEmpty()) {
      return res.status(400).json({
        status: 'FAIL',
        message: 'Validation error',
        errors: validateRequest.array()
      })
    }

    const { email, password } = req.body
    const user = await userService.getByEmail(email)

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({
        status: 'FAIL',
        message: 'Invalid password'
      })
    }
    
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      avatar: user.avatar
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' })

    res.status(200).json({
      status: 'OK',
      message: 'Successfully sign in',
      data: {
        user,
        token
      }
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const signUp = async (req: Request, res: Response): Promise<any> => {
  try {
    const validateRequest = validationResult(req)
    if (!validateRequest.isEmpty()) {
      return res.status(400).json({
        status: 'FAIL',
        message: 'Validation error',
        errors: validateRequest.array()
      })
    }

    const user = req.body
    const avatar = `/public/uploads/images/${req.file!.filename}`
    const password = bcrypt.hashSync(user.password, 10)
    const role = 'Member'
    const newUser = await userService.store({ ...user, avatar, password, role })

    res.status(201).json({
      status: 'OK',
      message: 'Successfully sign up',
      data: newUser
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

export default {
  signIn,
  signUp
}