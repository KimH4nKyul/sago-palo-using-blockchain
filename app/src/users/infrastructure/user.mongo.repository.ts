import { User } from '../domain/user'
import { UserRepository } from '../interface/user.repository'
import { UserModel } from './model/user.model'

export class UserMongoRepository implements UserRepository {
  async findById(dbId: string): Promise<User> {
    const founded = await UserModel.findById(dbId)
    // TODO: Promise<User | null> 로 타입 변경
    return User.from(founded?.userId, founded!.password, founded?._id)
  }

  async findAll(): Promise<User[]> {
    const founded = (await UserModel.find().sort({ _id: -1 })).map((it) => {
      return User.from(it.userId, it.password, it._id)
    })
    return founded
  }

  async create(user: User): Promise<User> {
    const saved = await UserModel.build({
      userId: user.userId,
      password: user.password,
    }).save()
    return User.from(saved.userId, saved.password, saved._id)
  }
}
