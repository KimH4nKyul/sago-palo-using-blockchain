import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'
import { opts } from './logger.options'
const { combine, timestamp, printf } = format

const timestampFormat = timestamp({
  format: 'YYYY-MM-DD HH:mm:ss',
})

const printFormat = printf((info) => {
  const { timestamp, level, message } = info
  const label = info.label || 'app'
  return `${timestamp} [${label}] ${level}: ${message}`
})

const loggerFormat = combine(timestampFormat, printFormat)

const logger = createLogger({
  level: 'http',
  format: loggerFormat,
  transports: [opts.httpFile, opts.infoFile],
})

if (process.env.NODE_ENV !== 'prod') {
  logger.add(opts.console)
}

const usersLogger = logger.child({ label: 'users' })
const productsLogger = logger.child({ label: 'products' })

export { logger, usersLogger, productsLogger }
