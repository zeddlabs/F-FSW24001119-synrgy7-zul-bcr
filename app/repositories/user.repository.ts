import { MaybeCompositeId } from "objection"
import { User, UserModel } from "../models/user.model"

const getAll = async (): Promise<UserModel[]> => {
  return await UserModel.query()
}

const getById = async (id: MaybeCompositeId): Promise<UserModel> => {
  return await UserModel.query()
    .findById(id)
    .throwIfNotFound({
      message: 'User not found'
    })
}

const getByEmail = async (email: string): Promise<UserModel> => {
  return await UserModel.query()
    .findOne({ email })
    .throwIfNotFound({
      message: 'User not found'
    })
}

const store = async (user: User): Promise<UserModel> => {
  return await UserModel.query()
    .insert(user)
}

const update = async (id: MaybeCompositeId, user: User): Promise<UserModel> => {
  return await UserModel.query()
    .findById(id)
    .patchAndFetchById(id, user)
    .throwIfNotFound({ 
      message: 'User not found' 
    })
}

const destroy = async (id: MaybeCompositeId): Promise<number> => {
  return await UserModel.query()
    .deleteById(id)
    .throwIfNotFound({ 
      message: 'User not found' 
    })
}

const getTotal = async (): Promise<number> => {
  return await UserModel.query()
    .resultSize()
}

export default {
  getAll,
  getById,
  getByEmail,
  store,
  update,
  destroy,
  getTotal
}