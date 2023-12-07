import { userRepository } from '../../shared/container'
import { User } from '../domain/user'
import { UserReadUsecase } from '../interface/user.read.usecase'
import { UserRepository } from '../interface/user.repository'

export class UserReadService implements UserReadUsecase {
  constructor(private readonly _userRepository: UserRepository) {}

  async findById(id: string): Promise<User> {
    return await userRepository.findById(id)
  }

  async findAll(): Promise<User[]> {
    throw new Error('Method not implemented.')
  }
}
