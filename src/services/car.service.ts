import db from "../configs/database.conf"
import ICar from "../models/car.model"

const getAllCars = async (): Promise<ICar[]> => {
  const data: ICar[] = await db<ICar>('cars')
  return data
}

export {
  getAllCars,
}