import { CustomError } from './custom.error'

class BadRequestError extends CustomError {
  statusCode: number = 400

  constructor(private readonly _message: string = 'Bad Request Error') {
    super(_message)
  }
}
