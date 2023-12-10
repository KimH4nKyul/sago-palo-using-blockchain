import { format } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import { Console } from 'winston/lib/winston/transports'

const httpFilter = format((info) => {
  return info.level === 'http' ? info : false
})

const infoFilter = format((info) => {
  return info.level === 'info' ? info : false
})

const opts = {
  httpFile: new DailyRotateFile({
    level: 'http',
    filename: 'log/access-%DATE%.http.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '50m',
    maxFiles: '14d',
    zippedArchive: true,
    format: httpFilter(),
  }),
  infoFile: new DailyRotateFile({
    level: 'info',
    filename: 'log/access-%DATE%.info.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '50m',
    maxFiles: '14d',
    zippedArchive: true,
    format: infoFilter(),
  }),
  console: new Console({
    level: 'info',
  }),
}

export { opts }
