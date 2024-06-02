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

const getById = async (id: string): Promise<any> => {
  return await carRepository.getById(id)
}

const store = async (car: any): Promise<any> => {
  return await carRepository.store(car)
}

const update = async (id: string, car: any): Promise<any> => {
  return await carRepository.update(id, car)
}

const destroy = async (id: string): Promise<number> => {
  return await carRepository.destroy(id)
}

export default {
  getAll,
  getById,
  store,
  update,
  destroy
}