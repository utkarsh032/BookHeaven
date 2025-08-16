import React from 'react'
import { BookContentTemplate } from '../Template/BookContentTemplate'

const BookContent = ({ bookContent }) => {
  return (
    <div>
      <BookContentTemplate bookContent={bookContent} />
    </div>
  )
}

export default BookContent
