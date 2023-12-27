import { format } from 'winston'

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

export { loggerFormat }
