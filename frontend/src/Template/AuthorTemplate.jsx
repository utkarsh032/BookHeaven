import React from 'react'
import { LuUsers } from 'react-icons/lu'
import { GiBlackBook } from 'react-icons/gi'

export const AuthorTemplate = ({
  avatar,
  name,
  rating,
  followers,
  booksCount,
  bio,
  genres = []
}) => {
  const formatFollowers = num => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num
  }

  return (
    <div className='rounded-lg p-4 shadow-md w-80 bg-[var(--primary-foreground)]'>
      {/* Author Image & Name */}
      <div className='flex flex-col text-center items-center gap-4 mb-4'>
        <img
          src={avatar}
          alt={name}
          className='w-16 h-16 rounded-full object-cover'
        />
        <div>
          <p className='font-bold text-lg'>{name}</p>
          <p className='text-yellow-500 text-xs'>⭐ {rating}</p>
        </div>
      </div>

      {/* Followers & Books */}
      <div className='flex justify-around mb-4 text-sm text-[var(--foreground)]'>
        <div className='text-center'>
          <p className='font-bold flex items-center gap-1'>
            <LuUsers />
            {formatFollowers(followers)}
          </p>
          <p className='text-sm'>Followers</p>
        </div>
        <div className='text-center'>
          <p className='font-bold flex items-center gap-1'>
            <GiBlackBook />
            {booksCount}
          </p>
          <p className='text-sm'>Books</p>
        </div>
      </div>

      {/* Bio & Genres */}
      <div className='mb-4 text-[var(--foreground)]'>
        <p className='text-sm line-clamp-2'>{bio}</p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {genres.map((genre, i) => (
            <span
              key={i}
              className='bg-[var(--secondary)] text-[var(--foreground)] px-2 py-1 rounded text-xs'
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Follow Button */}
      <button className='w-full bg-[var(--secondary)] border py-1 rounded hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition'>
        Follow Author
      </button>
    </div>
  )
}
