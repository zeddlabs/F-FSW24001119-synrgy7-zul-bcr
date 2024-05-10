import { Request, Response, NextFunction } from "express"

const index = (req: Request, res: Response, next: NextFunction): any => {
  try {
    res.status(200).json({ message: 'GET /cars' })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to get all cars: ${error}`)
    )
  }
}

const show = (req: Request, res: Response, next: NextFunction): any => {
  try {
    res.status(200).json({ message: 'GET /cars/:id' })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to get a car: ${error}`)
    )
  }
}

const store = (req: Request, res: Response, next: NextFunction): any => {
  try {
    res.status(201).json({ message: 'POST /cars' })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to create a car: ${error}`)
    )
  }
}

const update = (req: Request, res: Response, next: NextFunction): any => {
  try {
    res.status(200).json({ message: 'PUT /cars/:id' })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to update a car: ${error}`)
    )
  }
}

const destroy = (req: Request, res: Response, next: NextFunction): any => {
  try {
    res.status(200).json({ message: 'DELETE /cars/:id' })
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