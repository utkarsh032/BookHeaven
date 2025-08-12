import jwt from 'jsonwebtoken'
import UserModel from '../API/models/UserModel.js'

export const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await UserModel.findById(decoded.id).select('-password')

      next()
    } catch (err) {
      return res.status(401).json({ message: 'Not authorized, invalid token' })
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' })
  }
}
