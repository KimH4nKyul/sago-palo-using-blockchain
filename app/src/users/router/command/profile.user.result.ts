import { User } from '../../../core/domain/users/user'

export class ProfileUserResult {
  constructor(
    private readonly _id: string,
    private readonly _objectId: string
  ) {}

  static from(user: Partial<User>) {
    if (!user) throw new Error('user not founded')
    if (!user.userId || !user.dbId) throw new Error('missing properties')
    return new ProfileUserResult(user.userId, user.dbId)
  }
}
