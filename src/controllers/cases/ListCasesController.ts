import { Request, Response } from 'express'

import { Controller } from '../../shared/protocols/controller'
import { ListCasesService } from '../../services/cases/ListCasesService'

export default class ListCasesController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const ongID = request.ong.id

      const listCasesService = new ListCasesService()
      const listCases = await listCasesService.execute(ongID)

      return response.send(listCases)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error'
      })
    }
  }
}
