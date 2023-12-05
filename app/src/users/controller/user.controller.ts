import { Request, Response } from 'express'
import { CreateUserReq } from './request/create.user.req'

export const createUser = (req: Request, res: Response) => {
  const _req: CreateUserReq = req.body

  res.status(201).json(_req)
}
