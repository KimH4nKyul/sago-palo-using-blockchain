import { configDotenv } from 'dotenv'
configDotenv({ path: `.env.${process.env.NODE_ENV}` })

import express, { Express } from 'express'
import { userRouter } from './users/router/user.rotuer'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(userRouter)

export { app }

// https://www.youtube.com/watch?v=VmY22KuRDbk
