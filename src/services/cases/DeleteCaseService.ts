import { CasesRepository } from '../../repositories/cases/CasesRepository'

import { ICasesRepository } from '../../repositories/cases/ICasesRepository'

import { UnauthorizedException } from '../../shared/exceptions/UnauthorizedException'

export class DeleteCaseService {
  private readonly casesRepository: ICasesRepository
  constructor () {
    this.casesRepository = new CasesRepository()
  }

  public async execute (caseID: number, ongID: number): Promise<void> {
    const cases = await this.casesRepository.findByOngID(ongID)
    const casesOngID = cases.map(case_ => case_.ongID)

    if (!casesOngID.includes(ongID)) {
      throw new UnauthorizedException('You do not have permission to delete this case.')
    }

    await this.casesRepository.deleteByCaseID(caseID)
  }
}
