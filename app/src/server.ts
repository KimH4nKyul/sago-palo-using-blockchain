import http from 'http'
import { app } from './app'
import { initMongoDb, mongoDbEventHandler } from './shared/startup'

const server = http.createServer(app)

const PORT = process.env.NODE_PORT || 3000
server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)

  try {
    mongoDbEventHandler()
    await initMongoDb('mongodb://localhost:27017/sagopalo')
  } catch {
    process.exit(-1)
  }
})
