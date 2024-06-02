import { CarModel } from "../models/car.model"
import carRepository from "../repositories/car.repository"

const getAll = async (): Promise<any> => {
  try {
    const cars = await carRepository.getAll()
    const carsCount = await carRepository.getTotal()

    return {
      data: cars,
      count: carsCount
    }
  } catch (error: unknown) {
    throw new Error(`An error occurred while trying to get all cars: ${error}`)
  }
}

const getById = async (id: string): Promise<CarModel> => {
  return await carRepository.getById(id)
}

const store = async (car: CarModel): Promise<CarModel> => {
  return await carRepository.store(car)
}

const update = async (id: string, car: CarModel): Promise<CarModel> => {
  return await carRepository.update(id, car)
}

const destroy = async (id: string, deleted_by: number): Promise<CarModel> => {
  return await carRepository.destroy(id, deleted_by)
}

export default {
  getAll,
  getById,
  store,
  update,
  destroy
}