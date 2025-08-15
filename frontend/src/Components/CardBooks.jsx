// CardBooks.jsx
import React, { useEffect, useState } from 'react'
import { CardTemplate } from '../Template/CardTemplate'

export const CardBooks = ({ limit, query }) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)

        const params = new URLSearchParams()
        if (query?.search) params.append('search', query.search)
        if (query?.category) params.append('category', query.category)

        if (query?.sort) {
          if (query.sort === 'rating_asc') {
            params.append('sortBy', 'rating')
            params.append('sortOrder', 'asc')
          } else if (query.sort === 'rating_desc') {
            params.append('sortBy', 'rating')
            params.append('sortOrder', 'desc')
          }
        }

        // Pagination example (optional)
        params.append('page', 1)
        params.append('limit', limit || 12)

        const res = await fetch(
          `https://bookheaven-a8my.onrender.com/api/books?${params.toString()}`
        )
        if (!res.ok) throw new Error('Failed to fetch books')

        const data = await res.json()
        setBooks(data || [])
        console.log(data)
      } catch (err) {
        console.error('Error fetching books:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [query, limit])

  if (loading) return <p className='text-center text-lg'>Loading books...</p>
  if (error) return <p className='text-center text-red-500'>Error: {error}</p>
  if (!books.length)
    return <p className='text-center text-gray-500'>No books found</p>

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
      {books.map(book => (
        <CardTemplate
          key={book._id}
          bookId={book._id}
          coverImage={book.coverImage}
          title={book.title}
          author={book.author}
          description={book.description}
          genre={book.genre}
          publishedYear={book.publishedYear}
          rating={book.rating || 0}
        />
      ))}
    </div>
  )
}
