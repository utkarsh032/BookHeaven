import express from 'express'
import { getAllBooks, getBookById } from '../controllers/bookController.js'

const bookRoutes = express.Router()

bookRoutes.get('/', getAllBooks)
bookRoutes.get('/:id', getBookById)

export default bookRoutes
