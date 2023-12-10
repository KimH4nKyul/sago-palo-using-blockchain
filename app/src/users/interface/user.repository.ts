import { User } from '../domain/user'

export interface UserRepository {
  create(user: User): Promise<User>
  findById(dbId: string): Promise<User>
  findAll(): Promise<User[]>
}
