import { IOngRepository, IOngData } from './IOngRepository'
import { Ongs } from '../../models/Ongs'
import { getRepository, Repository, getManager } from 'typeorm'

export class OngRepository implements IOngRepository {
  private readonly ongsOrmRepository: Repository<Ongs>

  constructor () {
    this.ongsOrmRepository = getRepository(Ongs)
  }

  public async findByEmail (email: string): Promise<Ongs> {
    return await this.ongsOrmRepository.findOne({
      where: {
        email
      }
    })
  }

  public async create (ongData: IOngData): Promise<Ongs> {
    const ong = this.ongsOrmRepository.create(ongData)

    await getManager().transaction(async transactionalEntityManager => {
      await transactionalEntityManager.save(ong)
    })

    return ong
  }
}
