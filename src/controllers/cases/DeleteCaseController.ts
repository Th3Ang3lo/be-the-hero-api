import { Request, Response } from 'express'

import { Controller } from '../../shared/protocols/controller'
import { DeleteCaseService } from '../../services/cases/DeleteCaseService'

export default class DeleteCaseController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const caseID = request.params.id
      const ongID = request.ong.id

      const deleteCaseService = new DeleteCaseService()
      await deleteCaseService.execute(caseID, ongID)

      return response.status(204).send()
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error'
      })
    }
  }
}
