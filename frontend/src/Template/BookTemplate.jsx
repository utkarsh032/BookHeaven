import React from 'react'

export const BookTemplate = ({
  coverImage,
  title,
  availability,
  description,
  genre,
  publishedYear,
  progress,
  bookContent
}) => {
  const totalChapters = Array.isArray(bookContent?.chapters)
    ? bookContent.chapters.length
    : 0

  const radius = 28
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className='flex flex-col md:flex-row  gap-4 p-4  bg-[var(--background)] '>
      {/* Cover */}
      <div className='min-w-[80px] md:min-w-[100px] flex justify-center'>
        <img
          src={coverImage}
          alt={title}
          className='w-40 h-auto md:w-44 md:h-auto '
        />
      </div>

      {/* Info */}
      <div className='flex flex-col justify-between flex-1 w-full text-gray-800'>
        <div>
          <div className='flex gap-2 items-center mb-2'>
            <p className='font-semibold  md:text-2xl'>{title}</p>
            <p
              className={`${
                availability ? 'text-green-600' : 'text-red-600'
              } mt-1 text-sm`}
            >
              {availability ? 'Available' : 'Unavailable'}
            </p>
          </div>
          <p className='text-xs md:text-sm text-gray-600'>{description}</p>
          <div className='gap-4 text-[10px] md:text-sm text-gray-500 mt-2'>
            <p>Genre: {genre}</p>
            <p>Year: {publishedYear}</p>
            <p>Chapters: {totalChapters}</p>
          </div>
        </div>
      </div>

      <div className='relative w-24 h-24 md:w-28 md:h-28'>
        <svg className='w-full h-full transform -rotate-90' viewBox='0 0 64 64'>
          <circle
            cx='32'
            cy='32'
            r={radius}
            fill='transparent'
            stroke='var(--secondary)'
            strokeWidth='4'
            className='md:stroke-[6]'
          />
          <circle
            cx='32'
            cy='32'
            r={radius}
            fill='transparent'
            stroke='var(--primary)'
            strokeWidth='4'
            strokeLinecap='round'
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className='transition-all duration-500 md:stroke-[6]'
          />
        </svg>
        {/* Center text */}
        <div className='absolute inset-0 flex items-center justify-center text-xs md:text-sm font-medium text-gray-700'>
          {progress}%
        </div>
      </div>
    </div>
  )
}
