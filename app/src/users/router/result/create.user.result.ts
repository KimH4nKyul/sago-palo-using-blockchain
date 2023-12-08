import { User } from '../../domain/user'

export class CreateUserResult {
  constructor(
    private readonly _id: string,
    private readonly _password: string,
    private readonly _objectId: string
  ) {}

  static from(user: Partial<User>) {
    if (!user) throw new Error('user not created')
    if (!user.id || !user.password || !user.dbId)
      throw new Error('missing properties')
    return new CreateUserResult(user.id, user.password, user.dbId)
  }
}
