import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true
    },
    author: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    genre: {
      type: String,
      trim: true
    },
    coverImage: {
      type: String
    },
    publishedYear: {
      type: Number
    },
    availability: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

export default mongoose.model('Book', bookSchema)
