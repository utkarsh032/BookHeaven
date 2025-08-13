import './App.css'
import { Navbar } from './Components/Navbar'
import CategorySection from './Pages/CategorySection'
import { FeaturedSection } from './Pages/FeaturedSection'
import { Footer } from './Pages/Footer'
import { HomePage } from './Pages/HomePage'
import { PopularAuthor } from './Pages/PopularAuthor'
import { StatisticsSection } from './Pages/StatisticsSection'

function App () {
  return (
    <>
      <Navbar />
      <HomePage />
      <FeaturedSection />
      <CategorySection />
      <PopularAuthor />
      <StatisticsSection />
      <Footer />
    </>
  )
}

export default App
