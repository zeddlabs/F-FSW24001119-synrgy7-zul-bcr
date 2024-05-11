import { Request, Response, NextFunction } from "express"
import { deleteSize, getAllSizes, getSizeById, storeSize, updateSize } from "../services/size.service"

const index = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    res.status(200).json({ 
      message: 'Successfully get all sizes',
      data: await getAllSizes()
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

    const data = await getSizeById(Number(id))

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

    const data = await storeSize({ name })

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

    const data = await updateSize(Number(id), { name })

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

    const data = await deleteSize(Number(id))

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