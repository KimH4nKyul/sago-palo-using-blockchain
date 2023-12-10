import morgan, { token } from 'morgan'
import { Request } from 'express'
import { logger } from './logger'

const LOGGER_FORMAT = `{
  "id": ":id",
  "http_version: ":http-version",
  "method": ":method",
  "url": ":url",
  "data": :body,
  "status": ":status"
  "response_time": :response-time
}`

const writeLogStream = {
  write: (message: string) => logger.http(message.trim()),
}

token('body', (req: Request) => {
  return JSON.stringify(req.body)
})

token('id', (req: Request) => {
  return req.id
})

const httpLogger = morgan(LOGGER_FORMAT, {
  stream: writeLogStream,
})

export { httpLogger }
