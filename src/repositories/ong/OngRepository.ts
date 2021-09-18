import { IOngRepository } from './interfaces/IOngRepository'

export default class OngRepository implements IOngRepository {
  public async findByEmail (email: string): Promise<any> {
    // TODO - this function
  }
}
