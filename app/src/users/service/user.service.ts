import { User } from '../domain/user'
import { UserRepository } from './user.repository'

export const create = async (
  { userRepository }: { userRepository: UserRepository },
  { id, password }: { id: string; password: string }
): Promise<User> => {
  return await userRepository.create(id, password)
}

export const me = () => {}

export const findOne = () => {}
