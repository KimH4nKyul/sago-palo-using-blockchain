import { User } from '../../core/domain/users/user'
import { UserReadUsecase } from '../../core/domain/users/interfaces/usecase/user.read.usecase'
import { UserRepository } from '../../core/domain/users/interfaces/repository/user.repository'

export class UserReadService implements UserReadUsecase {
  constructor(private readonly _userRepository: UserRepository) {}

  async findById(dbId: string): Promise<User> {
    return await this._userRepository.findById(dbId)
  }

  async findAll(): Promise<User[]> {
    return await this._userRepository.findAll()
  }
}
