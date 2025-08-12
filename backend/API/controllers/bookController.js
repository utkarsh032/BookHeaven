import BookModel from '../models/BookModel'

export const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find()
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}
