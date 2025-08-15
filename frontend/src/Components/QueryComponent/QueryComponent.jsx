import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiViewfinderCircle } from 'react-icons/hi2'

export const QueryComponent = ({ onQuery }) => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')

  const handleSearch = () => {
    onQuery({ search, category, sort })
  }

  return (
    <div className='flex flex-col md:flex-row justify-between items-center rounded-md p-2 mb-6 bg-[var(--primary-foreground)] gap-4'>
      {/* Searching */}
      <div className='flex items-center bg-[var(--background)] px-4 py-2 rounded-md border border-transparent focus-within:border-[var(--primary)]'>
        <input
          type='text'
          placeholder='Search books...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='w-full  md:w-64 outline-none border-none'
        />
        <p onClick={handleSearch} className='cursor-pointer'>
          <FiSearch />
        </p>
      </div>

      {/* Filtering */}
      <select
        className='bg-[var(--background)] px-4 py-2 rounded-md border border-transparent focus:border-[var(--primary)]'
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value=''>All Books</option>
        <option value='Sci Fri'>Sci Fri</option>
        <option value='Spiritual'>Spiritual</option>
        <option value='Self Help'>Self Help</option>
        <option value='Non-fri'>Non-fri</option>
      </select>

      {/* Sorting */}
      <select
        value={sort}
        onChange={e => setSort(e.target.value)}
        className='bg-[var(--background)] px-4 py-2 rounded-md border border-transparent focus:border-[var(--primary)]'
      >
        <option value=''>Sort By</option>
        <option value='rating_asc'>Rating: Low to High</option>
        <option value='rating_desc'>Rating: High to Low</option>
      </select>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className='flex items-center bg-[var(--primary)] hover:bg-[var(--primary)/90] text-[var(--primary-foreground)] px-4 py-2 rounded-md gap-2'
      >
        Find
        <HiViewfinderCircle />
      </button>
    </div>
  )
}

export const Pagination = () => {
  return (
    <div className='flex justify-center items-center mt-6'>
      <button className='px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md hover:bg-[var(--primary)/90]'>
        Previous
      </button>
      <span className='mx-2'>1</span>
      <button className='px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md hover:bg-[var(--primary)/90]'>
        Next
      </button>
    </div>
  )
}
