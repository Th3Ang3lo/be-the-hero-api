import { IOngRepository, IOngData } from './interfaces/IOngRepository'
import { Ongs } from '../../models/Ongs'
import { getRepository, Repository } from 'typeorm'

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
    return this.ongsOrmRepository.create(ongData)
  }
}
