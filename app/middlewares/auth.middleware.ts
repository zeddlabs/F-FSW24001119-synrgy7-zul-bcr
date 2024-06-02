import 'dotenv/config'
import { NextFunction, Response } from "express"
import jwt from "jsonwebtoken"
import IRequest from '../types/request.type'
import IUser from '../types/user.type'

const jwtValidation = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(401).json({
        status: 'FAIL',
        message: 'Unauthorized'
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    req.user = decoded as IUser
    next()
  } catch (error: any) {
    return res.status(401).json({
      status: 'FAIL',
      message: 'Unauthorized'
    })
  }
}

const isSuperAdmin = async (req: IRequest, res: Response, next: NextFunction) => {
  if (req.user.role !== 'Super Admin') {
    return res.status(403).json({
      status: 'FAIL',
      message: 'Forbidden'
    })
  }
  next()
}

const isAdmin = async (req: IRequest, res: Response, next: NextFunction) => {
  if (req.user.role !== 'Super Admin' && req.user.role !== 'Admin') {
    return res.status(403).json({
      status: 'FAIL',
      message: 'Forbidden'
    })
  }
  next()
}

export { 
  jwtValidation,
  isSuperAdmin,
  isAdmin
}