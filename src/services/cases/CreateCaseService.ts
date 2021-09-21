import { BadRequestException } from '../../shared/exceptions/BadRequestException'
import { caseValidator } from '../../utils/validations/case'
import { CasesRepository } from '../../repositories/cases/CasesRepository'

interface ICaseData {
  title: string
  description: string
  amount: number
}

interface ICaseResponse {
  id: number
  title: string
  amount: number
  created_at: Date
  updated_at: Date
}

export class CreateCaseService {
  public async execute (caseData: ICaseData, ongID: number): Promise<ICaseResponse> {
    try {
      await caseValidator.validate(caseData)
    } catch (error) {
      throw new BadRequestException(error.message, {
        [error.path]: error.message
      })
    }

    const { title, description, amount } = caseData

    const casesRepository = new CasesRepository()
    const createCase = await casesRepository.create({ title, description, amount }, ongID)

    return createCase
  }
}
