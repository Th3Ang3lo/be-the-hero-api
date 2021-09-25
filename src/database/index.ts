import { createConnection } from 'typeorm'

createConnection().then(() => console.log('SQLITE connected successfully')).catch(error => console.log('Error on MySQL connection', error))
