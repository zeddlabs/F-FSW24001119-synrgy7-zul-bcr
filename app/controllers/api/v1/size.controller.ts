import { Request, Response } from "express"
import sizeService from "../../../services/size.service"
import { validationResult } from "express-validator"

const index = async (req: Request, res: Response): Promise<any> => {
  try {
    const sizes = await sizeService.getAll()

    res.status(200).json({
      status: 'OK',
      message: 'Successfully get all sizes',
      count: sizes.count,
      data: sizes.data,
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

    const size = await sizeService.getById(id)

    res.status(200).json({
      status: 'OK',
      message: 'Successfully get a size',
      data: size
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

    const size = req.body

    const newSize = await sizeService.store(size)

    res.status(201).json({
      status: 'OK',
      message: 'Successfully create a new size',
      data: newSize
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
    const size = req.body

    const updatedSize = await sizeService.update(id, size)

    res.status(200).json({
      status: 'OK',
      message: 'Successfully update a size',
      data: updatedSize
    })
  } catch (error: any) {
    res.status(404).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const destroy = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params

    await sizeService.destroy(id)

    res.status(200).json({
      status: 'OK',
      message: 'Successfully delete a size',
    })
  } catch (error: any) {
    res.status(404).json({
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