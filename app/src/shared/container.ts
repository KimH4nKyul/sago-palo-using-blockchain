import { UserMongoRepository } from '../users/infrastructure/user.mongo.repository'
import { UserCreateService } from '../users/service/user.create.service'

export const userRepository = new UserMongoRepository()
export const userCreateService = new UserCreateService(userRepository)
