import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BookTemplate } from '../../Template/BookTemplate'
import BookContent from '../../Components/BookContent'

export const ReadBookPage = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(
          `https://bookheaven-a8my.onrender.com/api/books/${id}`
        )
        if (!res.ok) throw new Error('Failed to fetch book')
        const data = await res.json()
        setBook(data)
      } catch (err) {
        console.error(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])

  if (loading) return <p className='text-center py-6'>Loading...</p>
  if (error) return <p className='text-center py-6 text-red-600'>{error}</p>
  if (!book) return null

  return (
    <div className='max-w-7xl mx-auto p-4 space-y-10'>
      <BookTemplate
        coverImage={book.coverImage}
        title={book.title}
        availability={book.availability}
        description={book.description}
        genre={book.genre}
        publishedYear={book.publishedYear}
        bookContent={book.bookContent}
        progress='30'
      />

      <BookContent bookContent={book.bookContent} />
    </div>
  )
}
