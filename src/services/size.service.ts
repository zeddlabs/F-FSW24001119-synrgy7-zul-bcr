import db from "../configs/database.conf"
import { CreateSizeDto } from "../dtos/size.dto"
import Size from "../models/size.model"

const getAllSizes = async (): Promise<Size[]> => {
  const data: Size[] = await db<Size>('sizes')
  return data
}

const getSizeById = async (id: number): Promise<Size> => {
  const [data]: Size[] = await db<Size>('sizes').where({ id })
  return data
}

const storeSize = async (size: CreateSizeDto): Promise<Size> => {
  const [data]: Size[] = await db<Size>('sizes').insert(size).returning('*')
  return data
}

const updateSize = async (id: number, size: CreateSizeDto): Promise<Size> => {
  const [data]: Size[] = await db<Size>('sizes').where({ id }).update(size).returning('*')
  return data
}

const deleteSize = async (id: number): Promise<number> => {
  const data: number = await db<Size>('sizes').where({ id }).del()
  return data
}

export {
  getAllSizes,
  getSizeById,
  storeSize,
  updateSize,
  deleteSize
}