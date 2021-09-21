import { Router } from 'express'
import { CreateCaseController } from '../controllers/cases/CreateCaseController'
import { ongAuthenticated } from '../middlewares/authenticated'

const CasesRouter = Router()

const createCaseController = new CreateCaseController()

CasesRouter.post('/', ongAuthenticated, createCaseController.handle)

export default CasesRouter
