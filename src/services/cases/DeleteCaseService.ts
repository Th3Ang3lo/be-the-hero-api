import { CasesRepository } from '../../repositories/cases/CasesRepository'

import { ICasesRepository } from '../../repositories/cases/ICasesRepository'

import { UnauthorizedException } from '../../shared/exceptions/UnauthorizedException'
import { NotFoundException } from '../../shared/exceptions/NotFoundException'

export class DeleteCaseService {
  private readonly casesRepository: ICasesRepository
  constructor () {
    this.casesRepository = new CasesRepository()
  }

  public async execute (caseID: string, ongID: number): Promise<void> {
    const cases = await this.casesRepository.findByID(caseID)

    if (!cases) {
      throw new NotFoundException('CaseID not found')
    }

    if (cases?.ongID !== ongID) {
      throw new UnauthorizedException('You do not have permission to delete this case.')
    }

    await this.casesRepository.deleteByCaseID(caseID)
  }
}
