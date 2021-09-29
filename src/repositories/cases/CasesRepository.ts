import { getRepository, Repository, getManager } from 'typeorm'
import { ICasesRepository, ICaseData } from './ICasesRepository'
import { Cases } from '../../models/Cases'

export class CasesRepository implements ICasesRepository {
  private readonly casesOrmRepository: Repository<Cases>

  constructor () {
    this.casesOrmRepository = getRepository(Cases)
  }

  public async create (caseData: ICaseData, ongID: number): Promise<Cases> {
    const case_ = this.casesOrmRepository.create({
      ...caseData,
      ongID
    })

    await getManager().transaction(async transactionalEntityManager => {
      await transactionalEntityManager.save(case_)
    })

    return case_
  }

  public async findByOngID (ongID: number): Promise<Cases[]> {
    return await this.casesOrmRepository.find({
      where: {
        ongID
      }
    })
  }

  public async deleteByCaseID (caseID: number): Promise<void> {
    await this.casesOrmRepository.delete(caseID)
  }
}
