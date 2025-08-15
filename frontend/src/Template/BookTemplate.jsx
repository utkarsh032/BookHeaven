import React from 'react'

export const BookTemplate = ({
  coverImage,
  title,
  availability,
  description,
  genre,
  publishedYear,
  progress,
  onClickRead
}) => {
  return (
    <div className='flex gap-4 p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition'>
      <div className='min-w-[80px]'>
        <img
          src={coverImage}
          alt={title}
          className='w-20 h-28 object-cover rounded-md'
        />
      </div>

      <div className='flex flex-col justify-between flex-1 text-gray-800'>
        <div>
          <p className='font-semibold text-lg line-clamp-1'>{title}</p>
          <p
            className={`text-sm ${
              availability ? 'text-green-600' : 'text-red-600'
            } mb-1`}
          >
            {availability ? 'Available' : 'Unavailable'}
          </p>
          <p className='text-sm text-gray-600 line-clamp-2'>{description}</p>

          <div className='flex gap-4 text-xs text-gray-500 mt-2'>
            <p>{genre}</p>
            <p>{publishedYear}</p>
          </div>
        </div>

        <div className='flex items-center justify-between mt-3'>
          <div className='text-sm text-gray-500'>
            Progress: <span className='font-medium'>{progress}</span>
          </div>
          <button
            onClick={onClickRead}
            className='px-4 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md text-sm hover:opacity-90 transition'
          >
            Read
          </button>
        </div>
      </div>
    </div>
  )
}
