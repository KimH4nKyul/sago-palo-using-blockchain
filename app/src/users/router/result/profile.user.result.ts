import { User } from '../../domain/user'

export class ProfileUserResult {
  constructor(
    private readonly _id: string,
    private readonly _objectId: string
  ) {}

  static from(user: Partial<User>) {
    if (!user) throw new Error('user not founded')
    if (!user.id || !user.objectId) throw new Error('missing properties')
    return new ProfileUserResult(user.id, user.objectId)
  }
}
