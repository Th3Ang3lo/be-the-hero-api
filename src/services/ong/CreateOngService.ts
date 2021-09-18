import { ongValidator } from '../../validations/ong'
import { BadRequestException } from '../../shared/exceptions/BadRequestException'
import { OngRepository } from '../../repositories/ong/OngRepository'
import { ConflictException } from '../../shared/exceptions/ConflictException'

interface IOngRequestData {
  ong: string
  email: string
  phone: string
  city: string
  state: string
}

export class CreateOngService {
  public async execute (ongData: IOngRequestData): Promise<any> {
    try {
      await ongValidator.validate(ongData)
    } catch (error) {
      throw new BadRequestException(error.message, {
        [error.path]: error.message
      })
    }

    const { ong, email, phone, city, state } = ongData
    const ongRepository = new OngRepository()

    const emailExists = await ongRepository.findByEmail(email)
    if (emailExists) {
      throw new ConflictException('E-mail indisponível')
    }

    return await ongRepository.create({ ong, email, phone, city, state })
  }
}
