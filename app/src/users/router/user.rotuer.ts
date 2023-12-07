import { Router, Request, Response } from 'express'
import { CreateUserCmd } from './command/create.user.cmd'
import { CreateUserResult } from './result/create.user.result'
import { userCreateService } from '../../shared/container'

const userRouter = Router()

userRouter.post('/', async (req: Request, res: Response) => {
  try {
    const cmd = CreateUserCmd.from(req.body)
    const user = await userCreateService.create(cmd.id, cmd.password)
    const result = CreateUserResult.from(user)
    res.status(201).json(result)
  } catch (e) {
    console.error(e)
  }
})

export { userRouter }
