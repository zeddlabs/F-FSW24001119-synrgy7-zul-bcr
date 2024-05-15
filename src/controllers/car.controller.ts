import { Request, Response, NextFunction } from "express"
import { deleteCar, getAllCars, getCarById, storeCar, updateCar } from '../services/car.service'
import Car from "../models/car.model"
import { unlinkSync } from "fs"

const index = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    let message: string = 'Successfully get all cars'
    const data: Car[] = await getAllCars()
    const count: number = data.length

    if (count === 0) message = 'No cars found'

    res.status(200).json({ 
      message,
      count,
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to get all cars: ${error}`)
    )
  }
}

const show = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id } = req.params

    const data: Car = await getCarById(Number(id))

    if (!data) {
      return res.status(404).json({
        message: 'Car not found'
      })
    }

    res.status(200).json({
      message: 'Successfully get a car',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to get a car: ${error}`)
    )
  }
}

const store = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { name, rent_per_day, size_id } = req.body

    if (!name || !rent_per_day || !size_id || !req.file) {
      return res.status(400).json({
        message: 'All fields (name, rent_per_day, size_id) are required'
      })
    }

    const image = `/public/uploads/images/${req.file.filename}`

    const data: Car = await storeCar({ name, rent_per_day, size_id, image })

    res.status(201).json({
      message: 'Successfully create a car',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to create a car: ${error}`)
    )
  }
}

const update = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id } = req.params
    const { name, rent_per_day, size_id, start_rent, finish_rent } = req.body
    let image: string = ''

    const car: Car = await getCarById(Number(id))
    if (!car) {
      return res.status(404).json({
        message: 'Car not found'
      })
    }

    if (req.file) {
      image = `/public/uploads/images/${req.file.filename}`
      unlinkSync(`.${car.image}`)
    } else {
      image = car.image
    }

    const data: Car = await updateCar(Number(id), { name, rent_per_day, size_id, image, start_rent, finish_rent })

    res.status(200).json({
      message: 'Successfully update a car',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to update a car: ${error}`)
    )
  }
}

const destroy = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id } = req.params

    const car: Car = await getCarById(Number(id))
    if (!car) {
      return res.status(404).json({
        message: 'Car not found'
      })
    }

    await deleteCar(Number(id))
    unlinkSync(`.${car.image}`)

    res.status(200).json({
      message: 'Successfully delete a car'
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to delete a car: ${error}`)
    )
  }
}

export default {
  index,
  show,
  store,
  update,
  destroy
}