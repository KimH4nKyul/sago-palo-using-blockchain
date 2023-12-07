import http from 'http'
import { app } from './app'
import { initMongoDb, mongoDbEventHandler } from './shared/startup'

const server = http.createServer(app)

const PORT = process.env.NODE_PORT || 3000
server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)

  try {
    if (!process.env.MONGODB_URL) {
      throw new Error('MONGODB_URL Not found')
    }

    mongoDbEventHandler()
    await initMongoDb(process.env.MONGODB_URL)
  } catch {
    process.exit(-1)
  }
})
