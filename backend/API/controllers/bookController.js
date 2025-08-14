import BookModel from '../models/BookModel.js'

export const getAllBooks = async (req, res) => {
  try {
    // Pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    // Filtering
    const filter = {}
    if (req.query.category) {
      filter.category = req.query.category
    }
    if (req.query.author) {
      filter.author = req.query.author
    }
    if (req.query.minPrice && req.query.maxPrice) {
      filter.price = {
        $gte: Number(req.query.minPrice),
        $lte: Number(req.query.maxPrice)
      }
    }

    // Searching
    if (req.query.search) {
      filter.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } },
        { author: { $regex: req.query.search, $options: 'i' } }
      ]
    }

    // Sorting
    let sort = {}
    if (req.query.sortBy) {
      const sortField = req.query.sortBy
      const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1
      sort[sortField] = sortOrder
    } else {
      sort.createdAt = -1
    }

    const books = await BookModel.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)

    const totalBooks = await BookModel.countDocuments(filter)

    res.json({
      total: totalBooks,
      page,
      pages: Math.ceil(totalBooks / limit),
      books
    })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
}
