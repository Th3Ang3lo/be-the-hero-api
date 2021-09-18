import { createConnection } from 'typeorm'

createConnection().then(() => console.log('MySQL connected successfully')).catch(error => console.log('Error on MySQL connection', error))
