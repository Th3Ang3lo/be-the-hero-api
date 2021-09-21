import { Controller } from '../../shared/protocols/controller'
import { Request, Response } from 'express'
import { CreateCaseService } from '../../services/cases/CreateCaseService'

export class CreateCaseController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { title, description, amount } = request.body

      const id = request.ong.id

      const createCaseService = new CreateCaseService()
      const createCase = await createCaseService.execute({ title, description, amount }, id)

      return response.send(createCase)
    } catch (error) {
      console.log(error)
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error',
        params: error.params
      })
    }
  }
}
