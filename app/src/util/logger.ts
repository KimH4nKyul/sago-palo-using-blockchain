import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'
import { Console } from 'winston/lib/winston/transports'
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

const httpFilter = format((info) => {
  return info.level === 'http' ? info : false
})

const infoFilter = format((info) => {
  return info.level === 'info' ? info : false
})

const httpFileTransports = new transports.DailyRotateFile({
  level: 'http',
  filename: 'log/access-%DATE%.http.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '50m',
  maxFiles: '14d',
  zippedArchive: true,
  format: httpFilter(),
})

const infoFileTransports = new transports.DailyRotateFile({
  level: 'info',
  filename: 'log/access-%DATE%.info.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '50m',
  maxFiles: '14d',
  zippedArchive: true,
  format: infoFilter(),
})

const logger = createLogger({
  level: 'http',
  format: loggerFormat,
  transports: [httpFileTransports, infoFileTransports],
})

if (process.env.NODE_ENV !== 'prod') {
  logger.add(new Console({ level: 'info' }))
}

const usersLogger = logger.child({ label: 'users' })
const productsLogger = logger.child({ label: 'products' })

export { logger, usersLogger, productsLogger }
