import { Router } from 'express'

import { ongAuthenticated } from '../middlewares/authenticated'

import { CreateCaseController } from '../controllers/cases/CreateCaseController'
import ListCasesController from '../controllers/cases/ListCasesController'

const CasesRouter = Router()

const createCaseController = new CreateCaseController()
const listCasesController = new ListCasesController()

CasesRouter.post('/', ongAuthenticated, createCaseController.handle)
CasesRouter.get('/', ongAuthenticated, listCasesController.handle)

export default CasesRouter
