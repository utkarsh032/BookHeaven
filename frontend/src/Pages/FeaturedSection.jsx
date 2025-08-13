import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa6'
import { CardBooks } from '../Components/CardBooks'

export const FeaturedSection = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center p-6 rounded-lg'>
        <div className='text-[var(--foreground)]'>
          <h2 className='text-2xl font-bold mb-2'>Featured Books</h2>
          <p className='text-sm'>
            Handpicked selections from our editorial team
          </p>
        </div>

        <Link
          className='text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] text-sm flex items-center gap-2'
          to='/books'
        >
          View All <FaAngleRight />
        </Link>
      </div>
      <CardBooks limit={4} />
    </div>
  )
}
