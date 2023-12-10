import { User } from '../../core/domain/users/user'
import { UserCreateUsecase } from '../../core/domain/users/port/user.create.usecase'
import { UserRepository } from '../../core/domain/users/port/user.repository'

export class UserCreateService implements UserCreateUsecase {
  constructor(private readonly _userRepository: UserRepository) {}

  async create(userId: string, password: string): Promise<User> {
    let user = User.create(userId, password)
    user = await this._userRepository.create(user)
    return user
  }
}
