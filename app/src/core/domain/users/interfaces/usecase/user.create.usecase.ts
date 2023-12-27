import { User } from '../../user'

export interface UserCreateUsecase {
  create(userId: string, password: string): Promise<User>
}
