import { configDotenv } from 'dotenv'
configDotenv({ path: `.env.${process.env.NODE_ENV}` })

import express, { Express, Request, Response, NextFunction } from 'express'
import { httpLogger } from './core/logger/http.logger'
import { httpIdAssigner } from './core/logger/http.id.assigner'

import { userRouter } from './users/router/user.rotuer'
import { PRODUCT_API, USER_API } from './core/constant/api'

const application = (): Express => {
  const app: Express = express()

  app.use(httpIdAssigner)
  app.use(httpLogger)

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(USER_API, userRouter)
  // app.use(PRODUCT_API, something)

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

  return app
}

export { application }
