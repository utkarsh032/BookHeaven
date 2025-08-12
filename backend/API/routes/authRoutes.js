import express from 'express'
import {
  getMe,
  loginUser,
  logoutUser,
  registerUser
} from '../controllers/authController.js'
import { protect } from '../../middlewares/authMiddleware.js'

const authRoutes = express.Router()

authRoutes.post('/register', registerUser)
authRoutes.post('/login', loginUser)
authRoutes.get('/logout', logoutUser)
authRoutes.get('/me', protect, getMe)

export default authRoutes
