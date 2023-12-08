import { User } from '../../domain/user'
import { UserRepository } from '../../interface/user.repository'

export class FakeUserRepository implements UserRepository {
  private dbId: string = crypto.randomUUID()
  private users: User[] = [new User('test_id', 'test_password', this.dbId)]

  async create(user: User): Promise<User> {
    const newUser = User.from(user.id, user.password, this.dbId)
    this.users.push(newUser)
    return newUser
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id)!
  }
  async findAll(): Promise<User[]> {
    return this.users
  }
}
