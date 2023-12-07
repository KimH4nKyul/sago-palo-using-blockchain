import { Router, Request, Response } from 'express'
import { CreateUserCmd } from './command/create.user.cmd'
import { create } from '../service/user.service'
import { UserMongoRepository } from '../infrastructure/user.mongo.repository'
import { CreateUserResult } from './result/create.user.result'

const userRouter = Router()
const userRepository = new UserMongoRepository()

userRouter.post('/api/users', async (req: Request, res: Response) => {
  const cmd = CreateUserCmd.from(req.body)
  const result = CreateUserResult.from(await create({ userRepository }, cmd))
  res.status(201).json(result)
})
userRouter.get('/api/users/me')
userRouter.get('/api/users/:id')

export { userRouter }
