import React from 'react'
import HeroBg from '../assets/Hero_BG.jpg'
import { GoBook } from 'react-icons/go'

export const HomePage = () => {
  return (
    <section
      className='relative bg-cover bg-center'
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Transparent overlay */}
      <div className='absolute inset-0 bg-[var(--beige)]/70'></div>

      {/* Content */}
      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 text-left'>
        <div className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>
          <p className='text-[var(--foreground)] leading-tight'>
            Your Gateway to
          </p>
          <p className='text-[var(--primary)] leading-tight'>Endless Stories</p>
        </div>

        <p className='text-[var(--muted-foreground)] text-base sm:text-lg lg:text-xl mb-8 max-w-xl'>
          Discover a world of literature at your fingertips. From timeless
          classics to contemporary bestsellers, find your next favorite book in
          our curated collection.
        </p>

        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
          <button className='bg-[var(--primary)] hover:opacity-95 text-white px-3 py-2 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-sm sm:text-base'>
            Start Reading <GoBook />
          </button>
          <button className='bg-[var(--secondary)] text-[var(--accent-blue)] hover:bg-[var(--primary)] hover:text-white  border px-3 py-2 rounded-lg  transition duration-300 text-sm sm:text-base'>
            Browse Categories
          </button>
        </div>
      </div>
    </section>
  )
}
