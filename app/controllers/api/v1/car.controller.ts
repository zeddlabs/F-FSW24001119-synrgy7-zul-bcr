import { Request, Response } from "express"
import carService from "../../../services/car.service"
import { validationResult } from "express-validator"
import IRequest from "../../../types/request.type"

const index = async (req: Request, res: Response): Promise<any> => {
  try {
    const cars = await carService.getAll()

    res.status(200).json({
      status: 'OK',
      message: 'Successfully get all cars',
      count: cars.count,
      data: cars.data
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

    const car = await carService.getById(id)

    res.status(200).json({
      status: 'OK',
      message: 'Successfully get a car',
      data: car
    })
  } catch (error: any) {
    res.status(404).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const store = async (req: IRequest, res: Response): Promise<any> => {
  try {
    const validateRequest = validationResult(req)
    if (!validateRequest.isEmpty()) {
      return res.status(400).json({
        status: 'FAIL',
        message: 'Validation error',
        errors: validateRequest.array()
      })
    }

    const car = req.body

    const image = `/public/uploads/images/${req.file!.filename}`

    const created_by = req.user.id
    const updated_by = req.user.id

    const newCar = await carService.store({ ...car, image, created_by, updated_by })

    res.status(201).json({
      status: 'OK',
      message: 'Successfully create a new car',
      data: newCar
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const update = async (req: IRequest, res: Response): Promise<any> => {
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
    const car = req.body
    let image: string | undefined

    const carData = await carService.getById(id)

    if (req.file) {
      image = `/public/uploads/images/${req.file.filename}`
    } else {
      image = carData.image
    }

    const updated_by = req.user.id

    const updatedCar = await carService.update(id, { ...car, image, updated_by })

    res.status(200).json({
      status: 'OK',
      message: 'Successfully update a car',
      data: updatedCar
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const destroy = async (req: IRequest, res: Response): Promise<any> => {
  try {
    const { id } = req.params

    const deleted_by = Number(req.user.id)

    await carService.destroy(id, deleted_by)

    res.status(200).json({
      status: 'OK',
      message: 'Successfully delete a car',
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