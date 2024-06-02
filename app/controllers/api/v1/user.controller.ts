import { Request, Response } from "express"
import userService from "../../../services/user.service"
import { validationResult } from "express-validator"
import bcrypt from "bcryptjs"

const index = async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await userService.getAll()

    res.status(200).json({
      status: 'OK',
      message: 'Successfully get all users',
      count: users.count,
      data: users.data
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const show = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params

    const user = await userService.getById(id)

    res.status(200).json({
      status: 'OK',
      message: 'Successfully get a user',
      data: user
    })
  } catch (error: any) {
    res.status(404).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const store = async (req: Request, res: Response): Promise<any> => {
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
    const newUser = await userService.store({ ...user, avatar, password })

    res.status(201).json({
      status: 'OK',
      message: 'Successfully store a user',
      data: newUser
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const update = async (req: Request, res: Response): Promise<any> => {
  try {
    const validateRequest = validationResult(req)
    if (!validateRequest.isEmpty()) {
      return res.status(400).json({
        status: 'FAIL',
        message: 'Validation error',
        errors: validateRequest.array()
      })
    }

    const { id } = req.params
    const user = req.body
    let avatar: string | undefined

    const userData = await userService.getById(id)

    if (req.file) {
      avatar = `/public/uploads/images/${req.file.filename}`
    } else {
      avatar = userData.avatar
    }

    if (user.password) {
      user.password = bcrypt.hashSync(user.password, 10)
    }

    const updatedUser = await userService.update(id, { ...user, avatar })

    res.status(200).json({
      status: 'OK',
      message: 'Successfully update a user',
      data: updatedUser
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const destroy = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params

    await userService.destroy(id)

    res.status(200).json({
      status: 'OK',
      message: 'Successfully delete a user'
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

export default {
  index,
  show,
  store,
  update,
  destroy
}