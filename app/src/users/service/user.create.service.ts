import { User } from '../domain/user'
import { UserCreateUsecase } from '../interface/user.create.usecase'
import { UserRepository } from '../interface/user.repository'

export class UserCreateService implements UserCreateUsecase {
  constructor(private readonly _userRepository: UserRepository) {}

  async create(userId: string, password: string): Promise<User> {
    let user = User.create(userId, password)
    user = await this._userRepository.create(user)
    return user
  }
}
