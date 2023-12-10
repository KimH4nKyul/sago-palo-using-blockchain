import { format } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const httpFilter = format((info) => {
  return info.level === 'http' ? info : false
})

const infoFilter = format((info) => {
  return info.level === 'info' ? info : false
})

const httpFileOpts = {
  level: 'http',
  filename: 'log/access-%DATE%.http.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '50m',
  maxFiles: '14d',
  zippedArchive: true,
  format: httpFilter(),
}

const infoFileOpts = {
  level: 'info',
  filename: 'log/access-%DATE%.info.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '50m',
  maxFiles: '14d',
  zippedArchive: true,
  format: infoFilter(),
}

export const httpFileTransports = new DailyRotateFile(httpFileOpts)
export const infoFileTransports = new DailyRotateFile(infoFileOpts)
