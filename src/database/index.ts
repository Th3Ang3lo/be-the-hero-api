import { createConnection } from 'typeorm'

createConnection().then(() => console.log('Postgres connected successfully')).catch(error => console.log('Error on MySQL connection', error))
