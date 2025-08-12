import express from 'express'
import { getAllBooks } from '../controllers/bookController.js'

const bookRoutes = express.Router()

bookRoutes.get('/', getAllBooks)

export default bookRoutes
