import { UserMongoRepository } from '../../users/infrastructure/user.mongo.repository'
import { UserCreateService } from '../../users/service/user.create.service'
import { UserReadService } from '../../users/service/user.read.service'

export const userRepository = new UserMongoRepository()
export const userCreateService = new UserCreateService(userRepository)
export const userReadService = new UserReadService(userRepository)
