import MyBookModel from '../models/MyBookModel.js'

// Get My Books
export const getMyBooks = async (req, res) => {
  try {
    const myBooks = await MyBookModel.find({ user: req.user.id }).populate(
      'book'
    )
    res.json(myBooks)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// Add Book to My List
export const addBookToMyList = async (req, res) => {
  try {
    const { bookId } = req.params

    const exists = await MyBookModel.findOne({
      user: req.user.id,
      book: bookId
    })

    if (exists) {
      return res.status(400).json({ message: 'Book already in your list' })
    }

    const newBook = await MyBookModel.create({
      user: req.user.id,
      book: bookId
    })

    res.status(201).json(newBook)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// Update Reading Status
export const updateReadingStatus = async (req, res) => {
  try {
    const { status } = req.body
    const validStatus = ['reading', 'completed', 'wishlist']

    if (!validStatus.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' })
    }

    const updated = await MyBookModel.findOneAndUpdate(
      { user: req.user.id, book: req.params.bookId },
      { status },
      { new: true }
    )

    if (!updated) {
      return res.status(404).json({ message: 'Book not found in your list' })
    }

    res.json(updated)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}

// Update Book Rating
export const updateRating = async (req, res) => {
  try {
    const { rating } = req.body

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' })
    }

    const updated = await MyBookModel.findOneAndUpdate(
      { user: req.user.id, book: req.params.bookId },
      { rating },
      { new: true }
    )

    if (!updated) {
      return res.status(404).json({ message: 'Book not found in your list' })
    }

    res.json(updated)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}
