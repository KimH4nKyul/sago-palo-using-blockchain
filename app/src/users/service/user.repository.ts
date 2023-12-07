import { User } from '../domain/user'

export interface UserRepository {
  create(id: string, password: string): Promise<User>
}
