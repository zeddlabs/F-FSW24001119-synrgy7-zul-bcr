import { Request, Response, NextFunction } from "express"
import { deleteSize, getAllSizes, getSizeById, storeSize, updateSize } from "../services/size.service"
import Size from "../models/size.model"

const index = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    let message: string = 'Successfully get all sizes'
    const data: Size[] = await getAllSizes()
    const count: number = data.length

    if (count === 0) message = 'No sizes found'

    res.status(200).json({ 
      message,
      count,
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to get all sizes: ${error}`)
    )
  }
}

const show = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id } = req.params

    const data: Size = await getSizeById(Number(id))

    if (!data) {
      return res.status(404).json({
        message: 'Size not found'
      })
    }

    res.status(200).json({
      message: 'Successfully get a size',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to get a size: ${error}`)
    )
  }
}

const store = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { name } = req.body

    const data: Size = await storeSize({ name })

    res.status(201).json({ 
      message: 'Successfully create a size',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to create a size: ${error}`)
    )
  }
}

const update = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id } = req.params
    const { name } = req.body

    const data: Size = await updateSize(Number(id), { name })

    if (!data) {
      return res.status(404).json({
        message: 'Size not found'
      })
    }

    res.status(200).json({
      message: 'Successfully update a size',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to update a size: ${error}`)
    )
  }
}

const destroy = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { id } = req.params

    const data: Size = await deleteSize(Number(id))

    if (!data) {
      return res.status(404).json({
        message: 'Size not found'
      })
    }

    res.status(200).json({
      message: 'Successfully delete a size',
      data
    })
  } catch (error: Error | any) {
    next(
      new Error(`An error occurred while trying to delete a size: ${error}`)
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