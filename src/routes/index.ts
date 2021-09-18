import { Router } from 'express'

import OngRouter from './ong.routes'

const Routes = Router()

Routes.use('/ong', OngRouter)

export default Routes
