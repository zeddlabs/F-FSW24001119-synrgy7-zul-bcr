import { User, UserModel } from "../models/user.model"
import userRepository from "../repositories/user.repository"

const getAll = async (): Promise<any> => {
  try {
    const users = await userRepository.getAll()
    const usersCount = await userRepository.getTotal()

    return {
      data: users,
      count: usersCount
    }
  } catch (error: unknown) {
    throw new Error(`An error occurred while trying to get all users: ${error}`)
  }
}

const getById = async (id: string): Promise<UserModel> => {
  return await userRepository.getById(id)
}

const getByEmail = async (email: string): Promise<UserModel> => {
  return await userRepository.getByEmail(email)
}

const store = async (user: User): Promise<UserModel> => {
  return await userRepository.store(user)
}

const update = async (id: string, user: User): Promise<UserModel> => {
  return await userRepository.update(id, user)
}

const destroy = async (id: string): Promise<number> => {
  return await userRepository.destroy(id)
}

export default {
  getAll,
  getById,
  getByEmail,
  store,
  update,
  destroy
}