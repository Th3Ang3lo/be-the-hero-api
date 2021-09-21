import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt'

import { UnauthorizedException } from '../shared/exceptions/UnauthorizedException'

interface ITokenPayload {
  iat: number
  exp: number
  id: number
}

export const ongAuthenticated = (request: Request, response: Response, next: NextFunction): void => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    response.status(401).json(new UnauthorizedException('Jwt token is missing'))
  }

  const [Bearer, token, ...rest] = authHeader.split(' ')

  try {
    if (Bearer !== 'Bearer' || rest.length > 0) {
      throw new Error()
    }

    const decoded = verifyToken(token)

    const { id } = decoded as ITokenPayload

    request.ong = {
      id
    }

    return next()
  } catch (error) {
    console.log(error)
    response.status(401).json(new UnauthorizedException('Jwt token invalid'))
  }
}
