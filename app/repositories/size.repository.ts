import { MaybeCompositeId, QueryBuilder } from "objection"
import { Size, SizeModel } from "../models/size.model"

const getAll = async (): Promise<SizeModel[]> => {
  return await SizeModel.query()
}

const getById = async (id: MaybeCompositeId): Promise<SizeModel> => {
  return await SizeModel.query()
    .findById(id)
    .throwIfNotFound({
      message: 'Size not found'
    })
}

const store = async (size: Size): Promise<SizeModel> => {
  return await SizeModel.query()
    .insert(size)
}

const update = async (id: MaybeCompositeId, size: Size): Promise<SizeModel> => {
  return await SizeModel.query()
    .findById(id)
    .patchAndFetchById(id, size)
    .throwIfNotFound({ 
      message: 'Size not found' 
    })
}

const destroy = async (id: MaybeCompositeId): Promise<number> => {
  return await SizeModel.query()
    .deleteById(id)
    .throwIfNotFound({ 
      message: 'Size not found' 
    })
}

const getTotal = async (): Promise<number> => {
  return await SizeModel.query()
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