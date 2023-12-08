import { User } from '../domain/user'

export interface UserRepository {
  create(user: User): Promise<User>
  findById(id: string): Promise<User>
  findAll(): Promise<User[]>
}
