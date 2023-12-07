import { User } from '../../domain/user'

export class ReadUserResult {
  constructor(
    private readonly _id: string,
    private readonly _objectId: string
  ) {}

  static from(user: Partial<User>) {
    if (!user) throw new Error('user not founded')
    if (!user.id || !user.objectId) throw new Error('missing properties')
    return new ReadUserResult(user.id, user.objectId)
  }
}
