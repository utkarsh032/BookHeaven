import dotenv from 'dotenv'
import app from './app.js'
import dbConnection from './config/dbConnection.js'

dotenv.config()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  // Database Connection
  dbConnection()
  console.log(`Server running on port ${PORT}`)
})
