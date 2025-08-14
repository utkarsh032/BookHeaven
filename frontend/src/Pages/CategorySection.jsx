import { FaAngleRight } from 'react-icons/fa6'

const categories = [
  {
    name: 'Fiction',
    count: 2847,
    icon: '📚',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'Mystery',
    count: 1234,
    icon: '🔍',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    name: 'Romance',
    count: 1876,
    icon: '💖',
    color: 'bg-pink-100 text-pink-700'
  },
  {
    name: 'Sci-Fi',
    count: 987,
    icon: '🚀',
    color: 'bg-green-100 text-green-700'
  },
  {
    name: 'Fantasy',
    count: 1543,
    icon: '⚔️',
    color: 'bg-orange-100 text-orange-700'
  },
  {
    name: 'Biography',
    count: 654,
    icon: '👤',
    color: 'bg-indigo-100 text-indigo-700'
  }
]

const CategorySection = () => {
  return (
    <div className='bg-[var(--secondary)] py-8 sm:py-10'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-8'>
          <p className='text-[var(--foreground)] text-xl sm:text-2xl font-semibold'>
            Explore by Category
          </p>
          <p className='text-[var(--foreground)] text-sm sm:text-base mt-2 mb-6'>
            Dive into specific genres and discover books tailored to your
            interests
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
          {categories.map(cat => (
            <div
              key={cat.name}
              className='flex items-center gap-4 p-3 sm:p-4 rounded-lg bg-[var(--primary-foreground)] 
                         shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full'
            >
              <span className='text-2xl sm:text-3xl'>{cat.icon}</span>
              <div className='text-[var(--foreground)] w-full flex justify-between items-center'>
                <div>
                  <h3 className='font-bold text-base sm:text-lg'>{cat.name}</h3>
                  <p className='text-xs sm:text-sm'>{cat.count} books</p>
                </div>
                <FaAngleRight className='text-sm sm:text-base' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategorySection
