import { CasesRepository } from '../../repositories/cases/CasesRepository'

import { ICasesRepository } from '../../repositories/cases/ICasesRepository'
import { NotFoundException } from '../../shared/exceptions/NotFoundException'

interface ICaseResponse {
  id: number
  title: string
  amount: number
  created_at: Date
  updated_at: Date
}

export class ListCasesService {
  private readonly casesRepository: ICasesRepository

  constructor () {
    this.casesRepository = new CasesRepository()
  }

  public async execute (ongID: number): Promise<ICaseResponse[]> {
    const cases = await this.casesRepository.findByOngID(ongID)

    if (!cases) {
      throw new NotFoundException('User not found')
    }

    return cases.map(case_ => {
      delete case_.ongID

      return case_
    })
  }
}
