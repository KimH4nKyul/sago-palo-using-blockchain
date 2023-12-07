import { User } from '../domain/user'

export interface UserReadUsecase {
  findById(id: string): Promise<User>
  findAll(): Promise<User[]>
}
