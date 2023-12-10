import http from 'http'
import { application } from './app'
import { initMongoDb, mongoDbEventHandler } from './core/infrastructure/startup'
import { logger } from './core/logger/logger'

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
      logger.info(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    logger.error(error)
  }
}

run()
