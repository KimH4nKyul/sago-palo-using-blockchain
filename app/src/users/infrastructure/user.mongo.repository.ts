import { User } from '../domain/user'
import { UserRepository } from '../interface/user.repository'
import { UserDocument, UserModel } from './model/user.model'

export class UserMongoRepository implements UserRepository {
  async findById(id: string): Promise<User> {
    const founded = await UserModel.findById(id)
    // TODO: Promise<User | null> 로 타입 변경
    return this.toDomain(founded!)
  }

  async findAll(): Promise<User[]> {
    const founded = (await UserModel.find().sort({ _id: -1 })).map((it) => {
      return this.toDomain(it)
    })
    return founded
  }

  async create(id: string, password: string): Promise<User> {
    const saved = await UserModel.build({ id, password }).save()
    return this.toDomain(saved)
  }

  private toDomain(userDoc: UserDocument): User {
    return User.from(userDoc.id, userDoc.password, userDoc._id)
  }
}
