import { MaybeCompositeId } from "objection"
import { CarModel } from "../models/car.model"

const getAll = async (): Promise<CarModel[]> => {
  return await CarModel
    .query()
    .select(
      'id',
      'name',
      'rent_per_day',
      'image',
      'start_rent',
      'finish_rent',
      'created_at',
      'updated_at'
    )
    .withGraphFetched('size')
}

const getById = async (id: MaybeCompositeId): Promise<CarModel> => {
  return await CarModel.query()
    .findById(id)
    .select(
      'id',
      'name',
      'rent_per_day',
      'image',
      'start_rent',
      'finish_rent',
      'created_at',
      'updated_at'
    )
    .withGraphFetched('size')
    .throwIfNotFound({
      message: 'Car not found'
    })
}

const store = async (car: CarModel): Promise<CarModel> => {
  return await CarModel.query()
    .insert(car)
    .returning([
      'id',
      'name',
      'rent_per_day',
      'image',
      'start_rent',
      'finish_rent',
      'created_at',
      'updated_at'
    ])
    .withGraphFetched('size')
}

const update = async (id: MaybeCompositeId, car: CarModel): Promise<CarModel> => {
  return await CarModel.query()
    .findById(id)
    .patchAndFetchById(id, car)
    .select(
      'id',
      'name',
      'rent_per_day',
      'image',
      'start_rent',
      'finish_rent',
      'created_at',
      'updated_at'
    )
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