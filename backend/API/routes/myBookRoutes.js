import express from 'express'
import {
  addBookToMyList,
  getMyBooks,
  updateRating,
  updateReadingStatus
} from '../controllers/myBookController.js'
import { protect } from '../../middlewares/authMiddleware.js'

const myBookRoutes = express.Router()

myBookRoutes.get('/', protect, getMyBooks)
myBookRoutes.post('/:bookId', protect, addBookToMyList)
myBookRoutes.patch('/:bookId/status', protect, updateReadingStatus)
myBookRoutes.patch('/:bookId/rating', protect, updateRating)

export default myBookRoutes
