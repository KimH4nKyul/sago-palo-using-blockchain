import { createLogger } from 'winston'
import 'winston-daily-rotate-file'
import { opts } from './logger.options'
import { loggerFormat } from './logger.formatter'

const logger = createLogger({
  level: 'http',
  format: loggerFormat,
  transports: [opts.httpFile],
})

if (process.env.NODE_ENV !== 'prod') {
  logger.add(opts.console)
}

const usersLogger = logger.child({ label: 'users' })
const productsLogger = logger.child({ label: 'products' })

export { logger, usersLogger, productsLogger }
