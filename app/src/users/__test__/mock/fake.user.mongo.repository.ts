import { User } from '../../domain/user'
import { UserRepository } from '../../service/user.repository'

export class FakeUserMongoRepository implements UserRepository {
  create(id: string, password: string): User {
    return User.create(id, password)
  }
}
