import { FiBookOpen, FiUsers, FiStar, FiTrendingUp } from 'react-icons/fi'

export const StatisticsSection = () => {
  const stats = [
    {
      icon: FiBookOpen,
      value: '50,000+',
      label: 'Books Available'
    },
    {
      icon: FiUsers,
      value: '1M+',
      label: 'Active Readers'
    },
    {
      icon: FiStar,
      value: '4.8',
      label: 'Average Rating'
    },
    {
      icon: FiTrendingUp,
      value: '95%',
      label: 'User Satisfaction'
    }
  ]

  return (
    <section className='py-16 bg-(--secondary)'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div key={index} className='text-center'>
              <div className='inline-flex items-center justify-center w-12 h-12 bg-(--primary)/10 rounded-lg mb-4'>
                <Icon className='h-6 w-6 text-primary bg' />
              </div>
              <h3 className='serif text-2xl font-bold text-(--foreground) mb-2'>
                {value}
              </h3>
              <p className='text-(--muted-foreground)'>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
