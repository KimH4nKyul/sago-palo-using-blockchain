import mongoose from 'mongoose'
import { logger } from '../logger/logger'

export const initMongoDb = async (host: string) => {
  try {
    await mongoose.connect(host)
    logger.info(`Initialized MongoDb: ${host}`)
  } catch (e) {
    console.error(e)
  }
}

export const mongoDbEventHandler = () => {
  mongoose.connection.on('connected' || 'reconnected', () => {
    logger.info('Connected MongoDb')
  })

  mongoose.connection.on('disconnected', () => {
    logger.warn('Disconnected MongoDb')
  })

  mongoose.connection.on('reconnectFailed', () => {
    console.error('Failed MongoDb')
  })
}
