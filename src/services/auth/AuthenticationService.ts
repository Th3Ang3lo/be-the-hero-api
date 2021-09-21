import { loginValidator } from '../../utils/validations/login'
import { BadRequestException } from '../../shared/exceptions/BadRequestException'
import { OngRepository } from '../../repositories/ong/OngRepository'
import { compareHash } from '../../utils/hash'
import { generateToken } from '../../utils/jwt'
import { UnauthorizedException } from '../../shared/exceptions/UnauthorizedException'

interface IAuthData {
  email: string
  password: string
}

interface IAuthResponse {
  token: string
}

export class AuthenticationService {
  public async execute (authData: IAuthData): Promise<IAuthResponse> {
    try {
      await loginValidator.validate(authData)
    } catch (error) {
      throw new BadRequestException(error.message, {
        [error.path]: error.message
      })
    }

    const { email, password } = authData

    const ongRepository = new OngRepository()
    const ong = await ongRepository.findByEmail(email)

    if (ong) {
      const compare = await compareHash(password, ong.password)

      if (compare) {
        delete ong.password

        return {
          ...ong,
          token: generateToken({
            id: ong.id
          })
        }
      }
    }

    throw new UnauthorizedException('Úsuário inexistente ou senha incorreta')
  }
}
