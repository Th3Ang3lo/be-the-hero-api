import 'reflect-metadata'
import 'dotenv/config'

import cors from 'cors'

import express from 'express'
import './database'
import Routes from './routes'

const app = express()

app.use(cors('*'))
app.use(express.json())
app.use(Routes)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server started on port ${port}!`)
})
