import { Router } from 'express'
import CreateOngController from '../controllers/ong/CreateOngController'

const OngRouter = Router()

const createOngController = new CreateOngController()

OngRouter.post('/', createOngController.handle)

export default OngRouter
