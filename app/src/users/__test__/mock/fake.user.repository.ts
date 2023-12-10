import { User } from '../../domain/user'
import { UserRepository } from '../../interface/user.repository'

export class FakeUserRepository implements UserRepository {
  private dbId: string = crypto.randomUUID()
  private users: User[] = [new User('test_id', 'test_password', this.dbId)]

  async create(user: User): Promise<User> {
    const newUser = User.from(user.userId, user.password, this.dbId)
    this.users.push(newUser)
    return newUser
  }
  async findById(dbId: string): Promise<User> {
    return this.users.find((user) => user.userId === dbId)!
  }
  async findAll(): Promise<User[]> {
    return this.users
  }
}
