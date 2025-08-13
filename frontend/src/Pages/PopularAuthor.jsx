import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import CardAuthor from '../Components/CardAuthor'

export const PopularAuthor = () => {
  return (
    <div className='max-w-6xl mx-auto py-6'>
      <div className='flex justify-between items-center rounded-lg mb-6'>
        <div className='text-(--foreground) '>
          <p className='text-2xl'>Popular Authors</p>
          <p className='text-sm'>
            Meet the talented writers behind your favorite stories
          </p>
        </div>
        <div className='flex items-center gap-2 text-(--primary) cursor-pointer text-sm'>
          <p>View All Authors</p>
          <FaAngleRight className='' />
        </div>
      </div>

      <div className='flex justify-center'>
        <CardAuthor />
      </div>
    </div>
  )
}
