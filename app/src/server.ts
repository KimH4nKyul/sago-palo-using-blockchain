import http from 'http'
import { application } from './app'
import {
  initMongoDb,
  mongoDbEventHandler,
} from './shared/infrastructure/startup'

const run = async () => {
  try {
    const server = http.createServer(application())

    if (!process.env.MONGODB_URL) {
      throw new Error('MONGODB_URL Not found')
    }

    mongoDbEventHandler()
    await initMongoDb(process.env.MONGODB_URL)

    const PORT = process.env.NODE_PORT || 3000
    server.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch {
    console.error
  }
}

run()
