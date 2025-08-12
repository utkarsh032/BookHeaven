import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRoutes from './API/routes/authRoutes.js'
import bookRoutes from './API/routes/bookRoutes.js'
import myBookRoutes from './API/routes/myBookRoutes.js'

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/books', bookRoutes)
app.use('/api/mybooks', myBookRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Book Reading Website Backend is running!' })
})

export default app
