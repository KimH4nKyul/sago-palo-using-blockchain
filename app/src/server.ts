import express, { Express } from 'express'
import { router } from './route/router'

const app: Express = express()

app.use(express.json())

app.use(router)

const PORT = process.env.NODE_PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
