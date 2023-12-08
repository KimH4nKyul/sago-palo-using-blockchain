import mongoose from 'mongoose'

export const initMongoDb = async (host: string) => {
  try {
    await mongoose.connect(host)
    console.log(`Initialized MongoDb: ${host}`)
  } catch (e) {
    console.error(e)
  }
}

export const mongoDbEventHandler = () => {
  mongoose.connection.on('connected', () => {
    console.log('Connected MongoDb')
  })

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected MongoDb')
  })

  mongoose.connection.on('reconnected', () => {
    console.log('Reconnected MongoDb')
  })

  mongoose.connection.on('reconnectFailed', () => {
    console.log('Failed MongoDb')
  })
}
