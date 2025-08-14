import React from 'react'
import { LiaAudioDescriptionSolid } from 'react-icons/lia'

export const CardTemplate = ({
  coverImage,
  title,
  author,
  description,
  genre,
  publishedYear,
  rating = 4
}) => {
  return (
    <div className='max-w-xs rounded-md shadow-lg border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300'>
      {/* Image */}
      <div className='flex mx-auto px-2 py-1 overflow-hidden '>
        <img
          src={coverImage}
          alt={`Cover of ${title}`}
          className='h-56 w-auto mx-auto object-contain '
        />
      </div>

      {/* Content */}
      <div className='p-4 flex flex-col justify-between'>
        <div>
          {/* Top Meta */}
          <div className='flex justify-between text-sm text-gray-500 mb-2'>
            <span className='bg-[var(--secondary)] text-[var(--foreground)] rounded-xl px-2 py-0.5'>
              {genre}
            </span>
            <span>
              {'⭐'.repeat(rating)}{' '}
              <span className='text-xs text-gray-400'>({rating})</span>
            </span>
          </div>

          {/* Book Info */}
          <div className='space-y-1 text-[var(--foreground)]'>
            <p className='text-lg font-bold line-clamp-1'>{title}</p>
            <p className='text-sm italic'>by {author}</p>
            <div className='text-[var(--primary)]'>
              <span className='line-clamp-2'>{description}</span>
            </div>
            <p className='text-gray-500 text-sm'>{publishedYear}</p>
          </div>
        </div>

        {/* Button */}
        <button
          className='mt-4 w-full bg-[var(--primary)] text-white py-2 rounded-md hover:bg-[var(--primary-dark)] transition'
          onClick={() => alert(`Opening ${title}`)}
          aria-label={`Read ${title}`}
        >
          Read Now
        </button>
      </div>
    </div>
  )
}
