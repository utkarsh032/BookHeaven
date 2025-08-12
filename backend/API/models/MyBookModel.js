import mongoose from 'mongoose'

const myBookSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true
    },
    status: {
      type: String,
      enum: ['reading', 'completed', 'wishlist'],
      default: 'reading'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    }
  },
  { timestamps: true }
)

export default mongoose.model('MyBook', myBookSchema)
