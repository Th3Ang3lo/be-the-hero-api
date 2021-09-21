import { Router } from 'express'
import { AuthenticationController } from '../controllers/auth/AuthenticationController'

const AuthRouter = Router()

const authenticationController = new AuthenticationController()

AuthRouter.post('/', authenticationController.handle)

export default AuthRouter
