import { ongValidator } from '../../validations/ong'
import { BadRequestException } from '../../shared/exceptions/BadRequestException'

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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { ong, email, phone, city, state } = ongData

    return {
      test: 123
    }
  }
}
