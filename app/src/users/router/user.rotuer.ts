import { Router, Request, Response } from 'express'
import { CreateUserCmd } from './command/create.user.cmd'
import { CreateUserResult } from './result/create.user.result'
import { userCreateService, userReadService } from '../../shared/container'
import { ReadUserResult } from './result/read.user.result'

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

userRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await userReadService.findById(id)
    const result = ReadUserResult.from(user)
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
        objectId: user.objectId,
      }
    })
    res.status(200).json(result)
  } catch {
    console.error
  }
})

export { userRouter }
