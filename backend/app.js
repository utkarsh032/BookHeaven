import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({ message: 'Book Reading Website Backend is running!' })
})

export default app
