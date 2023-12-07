import http from 'http'
import { app } from './app'
import { initMongoDb, mongoDbEventHandler } from './shared/startup'

const run = async () => {
  const server = http.createServer(app)

  if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL Not found')
  }

  mongoDbEventHandler()
  await initMongoDb(process.env.MONGODB_URL)

  const PORT = process.env.NODE_PORT || 3000
  server.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

run()
