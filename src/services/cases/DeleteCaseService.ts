import { CasesRepository } from '../../repositories/cases/CasesRepository'

import { ICasesRepository } from '../../repositories/cases/ICasesRepository'

import { UnauthorizedException } from '../../shared/exceptions/UnauthorizedException'

export class DeleteCaseService {
  private readonly casesRepository: ICasesRepository

  constructor () {
    this.casesRepository = new CasesRepository()
  }

  public async execute (caseID: string, ongID: number): Promise<void> {
    const caseToDelete = await this.casesRepository.findByID(caseID)

    if (caseToDelete) {
      if (caseToDelete?.ongID !== ongID) {
        throw new UnauthorizedException('You do not have permission to delete this case.')
      }

      await this.casesRepository.deleteByCaseID(caseID)
    }
  }
}
