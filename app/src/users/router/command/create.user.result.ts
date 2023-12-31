import { User } from '../../../core/domain/users/user'

export class CreateUserResult {
  constructor(
    private readonly _id: string,
    private readonly _password: string,
    private readonly _objectId: string
  ) {}

  static from(user: Partial<User>) {
    if (!user) throw new Error('user not created')
    if (!user.userId || !user.password || !user.dbId)
      throw new Error('missing properties')
    return new CreateUserResult(user.userId, user.password, user.dbId)
  }
}
