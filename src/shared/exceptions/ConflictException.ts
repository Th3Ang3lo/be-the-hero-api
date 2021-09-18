import StatusCode from 'status-code-enum'
import { AppError } from './AppError'

export class ConflictException extends AppError {
  statusCode = StatusCode.ClientErrorConflict

  constructor (message?: string) {
    super(message || 'Conflict')
  }
}
