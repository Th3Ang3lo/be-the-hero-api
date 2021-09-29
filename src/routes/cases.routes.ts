import { Router } from 'express'

import { ongAuthenticated } from '../middlewares/authenticated'

import { CreateCaseController } from '../controllers/cases/CreateCaseController'
import ListCasesController from '../controllers/cases/ListCasesController'
import DeleteCaseController from '../controllers/cases/DeleteCaseController'

const CasesRouter = Router()

const createCaseController = new CreateCaseController()
const listCasesController = new ListCasesController()
const deleteCaseController = new DeleteCaseController()

CasesRouter.post('/', ongAuthenticated, createCaseController.handle)
CasesRouter.get('/', ongAuthenticated, listCasesController.handle)
CasesRouter.delete('/:id', ongAuthenticated, deleteCaseController.handle)

export default CasesRouter
