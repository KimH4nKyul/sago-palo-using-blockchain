import { Router, Request, Response } from 'express'
import { CreateUserCmd } from './command/create.user.cmd'
import { CreateUserResult } from './result/create.user.result'
import {
  userCreateService,
  userReadService,
} from '../../shared/infrastructure/container'
import { ProfileUserResult } from './result/profile.user.result'
import { ProfileUserCmd } from './command/profile.user.cmd'
import { usersLogger } from '../../util/logger'

const userRouter = Router()

// TODO: login with passport-jwt?
userRouter.post(
  '/login',
  async () => {
    // TODO: auth middleware
  },
  async (req: Request, res: Response) => {}
)

// TODO: logout with passport-jwt?
userRouter.post(
  '/logout',
  async () => {
    // TODO: auth middleware
  },
  async (req: Request, res: Response) => {}
)

userRouter.post('/', async (req: Request, res: Response) => {
  try {
    const cmd = CreateUserCmd.from(req.body)
    const user = await userCreateService.create(cmd.id, cmd.password)
    usersLogger.info(`create a user - ${JSON.stringify(user)}`)

    const result = CreateUserResult.from(user)
    res.status(201).json(result)
  } catch (e) {
    console.error(e)
  }
})

userRouter.get('/me', async (req: Request, res: Response) => {
  try {
    const cmd = ProfileUserCmd.from(req.body)
    const user = await userReadService.findById(cmd.id)
    const result = ProfileUserResult.from(user)
    res.status(200).json(result)
  } catch {
    console.error
  }
})

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userReadService.findAll()
    const result = users.map((user) => {
      return {
        id: user.id,
        objectId: user.dbId,
      }
    })
    res.status(200).json(result)
  } catch {
    console.error
  }
})

export { userRouter }
