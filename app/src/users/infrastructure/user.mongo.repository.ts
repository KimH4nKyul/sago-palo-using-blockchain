import { User } from '../domain/user'
import { UserRepository } from '../service/user.repository'
import { UserDocument, UserModel } from './model/user.model'

export class UserMongoRepository implements UserRepository {
  async create(id: string, password: string): Promise<User> {
    const saved = await UserModel.build({ id, password }).save()
    return this.toDomain(saved)
  }

  toDomain(userDoc: UserDocument): User {
    return User.from(userDoc.id, userDoc.password, userDoc.seq)
  }
}
