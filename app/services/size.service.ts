import { Size, SizeModel } from "../models/size.model"
import sizeRepository from "../repositories/size.repository"

const getAll = async (): Promise<any> => {
  try {
    const sizes = await sizeRepository.getAll()
    const sizesCount = await sizeRepository.getTotal()

    return {
      data: sizes,
      count: sizesCount
    }
  } catch (error: unknown) {
    throw new Error(`An error occurred while trying to get all sizes: ${error}`)
  }
}

const getById = async (id: string): Promise<SizeModel> => {
  return await sizeRepository.getById(id)
}

const store = async (size: Size): Promise<SizeModel> => {
  return await sizeRepository.store(size)
}

const update = async (id: string, size: Size): Promise<SizeModel> => {
  return await sizeRepository.update(id, size)
}

const destroy = async (id: string): Promise<number> => {
  return await sizeRepository.destroy(id)
}

export default {
  getAll,
  getById,
  store,
  update,
  destroy
}