import { User } from '../domain/user'

export interface UserCreateUsecase {
  create(id: string, password: string): Promise<User>
}
