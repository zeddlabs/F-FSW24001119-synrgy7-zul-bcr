import { MaybeCompositeId } from "objection"
import { CarModel } from "../models/car.model"

const getAll = async (): Promise<CarModel[]> => {
  return await CarModel
    .query()
    .where('is_deleted', false)
    .withGraphFetched('[size, createdBy, updatedBy, deletedBy]')
}

const getById = async (id: MaybeCompositeId): Promise<CarModel> => {
  return await CarModel.query()
    .findById(id)
    .where('is_deleted', false)
    .withGraphFetched('[size, createdBy, updatedBy, deletedBy]')
    .throwIfNotFound({
      message: 'Car not found'
    })
}

const store = async (car: CarModel): Promise<CarModel> => {
  return await CarModel.query()
    .insertAndFetch(car)
    .withGraphFetched('size')
}

const update = async (id: MaybeCompositeId, car: CarModel): Promise<CarModel> => {
  return await CarModel.query()
    .findById(id)
    .patchAndFetchById(id, car)
    .withGraphFetched('size')
    .throwIfNotFound({ 
      message: 'Car not found' 
    })
}

const destroy = async (id: MaybeCompositeId): Promise<number> => {
  return await CarModel.query()
    .deleteById(id)
    .throwIfNotFound({ 
      message: 'Car not found' 
    })
}

const getTotal = async (): Promise<number> => {
  return await CarModel.query()
    .resultSize()
}

export default {
  getAll,
  getById,
  store,
  update,
  destroy,
  getTotal
}