import React, { useState } from 'react'
import { CardBooks } from '../../Components/CardBooks'
import {
  Pagination,
  QueryComponent
} from '../../Components/QueryComponent/QueryComponent'
import { ImBooks } from 'react-icons/im'

export const AllbookPage = () => {
  const [query, setQuery] = useState({
    search: '',
    category: '',
    sort: ''
  })

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
      <div className='flex justify-between items-center mb-2 text-(--foreground)'>
        <h1 className='text-3xl font-bold text-center mb-2'>All Books</h1>
        <span className='border-2 rounded-md p-2'>
          <ImBooks />
        </span>
      </div>

      <div>
        <p className='text-gray-600 mb-4'>
          Find your favorite books from our extensive collection.
        </p>
        <QueryComponent onQuery={setQuery} />
      </div>

      <CardBooks query={query} />
      <div>
        <Pagination />
      </div>
    </div>
  )
}
