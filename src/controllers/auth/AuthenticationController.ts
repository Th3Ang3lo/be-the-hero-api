import { Controller } from '../../shared/protocols/controller'
import { Request, Response } from 'express'
import { AuthenticationService } from '../../services/auth/AuthenticationService'

export class AuthenticationController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body

      const authenticationService = new AuthenticationService()
      const authentication = await authenticationService.execute({ email, password })

      return response.send(authentication)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error',
        params: error.params
      })
    }
  }
}