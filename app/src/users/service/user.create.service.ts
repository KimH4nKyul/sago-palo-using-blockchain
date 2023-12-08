import { User } from '../domain/user'
import { UserCreateUsecase } from '../interface/user.create.usecase'
import { UserRepository } from '../interface/user.repository'

export class UserCreateService implements UserCreateUsecase {
  constructor(private readonly _userRepository: UserRepository) {}

  async create(id: string, password: string): Promise<User> {
    const user = User.create(id, password)
    return await this._userRepository.create(user)
  }
}
