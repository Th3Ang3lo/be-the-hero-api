import { Router } from 'express'

import OngRouter from './ong.routes'
import AuthRouter from './auth.routes'
import CasesRouter from './cases.routes'

const Routes = Router()

Routes.use('/ong', OngRouter)
Routes.use('/sessions', AuthRouter)
Routes.use('/cases', CasesRouter)

export default Routes
