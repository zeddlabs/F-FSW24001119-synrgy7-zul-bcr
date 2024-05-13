import db from "../configs/database.conf"
import { CreateCarDto, UpdateCarDto } from "../dtos/car.dto"
import Car from "../models/car.model"

// biar ntar size nya bentuk json
const rawQuery: string = 'cars.id, cars.name, cars.rent_per_day, json_build_object(\'id\', sizes.id, \'name\', sizes.name) as size, cars.image, cars.start_rent, cars.finish_rent, cars.created_at, cars.updated_at'

const getAllCars = async (): Promise<Car[]> => {
  const data: Car[] = await db<Car>('cars').select(db.raw(rawQuery)).join('sizes', 'cars.size_id', 'sizes.id').orderBy('cars.id', 'asc')

  return data
}

const getCarById = async (id: number): Promise<Car> => {
  const [data]: Car[] = await db<Car>('cars').select(db.raw(rawQuery)).join('sizes', 'cars.size_id', 'sizes.id').where('cars.id', id)

  return data
}

const storeCar = async (car: CreateCarDto): Promise<Car> => {
  const data: Car = await db<Car>('cars').insert(car).returning('*').then(([car]) => getCarById(car.id))

  return data
}

const updateCar = async (id: number, car: UpdateCarDto): Promise<Car> => {
  const data: Car = await db<Car>('cars').where({ id }).update(car).returning('*').then(([car]) => getCarById(car.id))

  return data
}

const deleteCar = async (id: number): Promise<number> => {
  const data = await db<Car>('cars').where({ id }).del()

  return data
}

export {
  getAllCars,
  getCarById,
  storeCar,
  updateCar,
  deleteCar
}