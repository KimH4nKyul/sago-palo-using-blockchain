import { User } from '../domain/user'

export interface UserReadUsecase {
  findById(dbId: string): Promise<User>
  findAll(): Promise<User[]>
}
