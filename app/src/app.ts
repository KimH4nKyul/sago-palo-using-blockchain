import { configDotenv } from 'dotenv'
configDotenv({ path: `.env.${process.env.NODE_ENV}` })

import express, { Express, Request, Response, NextFunction } from 'express'
import { userRouter } from './users/router/user.rotuer'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(userRouter)

app.all('*', (req: Request, res: Response) => {
  throw new Error('Not Found')
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return
  }
  return res.status(500).send({
    message: 'Internal Server Error',
  })
})

export { app }
