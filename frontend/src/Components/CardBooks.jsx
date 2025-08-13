import React, { useEffect, useState } from 'react'
import { CardTemplate } from '../Template/CardTemplate'

export const CardBooks = ({ limit }) => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/books`)
        if (!res.ok) throw new Error('Failed to fetch books')

        const data = await res.json()
        setBooks(data)
      } catch (err) {
        console.error('Error fetching books:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  if (loading) {
    return <p className='text-center text-lg'>Loading books...</p>
  }

  if (error) {
    return <p className='text-center text-red-500'>Error: {error}</p>
  }

  if (books.length === 0) {
    return <p className='text-center text-gray-500'>No books found</p>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
      {books.slice(0, limit || books.length).map(book => (
        <CardTemplate
          key={book._id}
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
