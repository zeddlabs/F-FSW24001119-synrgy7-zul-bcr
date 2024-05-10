import db from "../configs/database.conf"
import ICar from "../types/car.type"

const getAllCars = async (): Promise<ICar[]> => {
  const data: ICar[] = await db<ICar>('cars')
  return data
}

export {
  getAllCars,
}