import { User } from '../domain/user'

export interface UserCreateUsecase {
  create(userId: string, password: string): Promise<User>
}
