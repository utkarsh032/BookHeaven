import './App.css'
import { Navbar } from './Components/Navbar'
import CategorySection from './Pages/CategorySection'
import { FeaturedSection } from './Pages/FeaturedSection'
import { HomePage } from './Pages/HomePage'
import { PopularAuthor } from './Pages/PopularAuthor'

function App () {
  return (
    <>
      <Navbar />
      <HomePage />
      <FeaturedSection />
      <CategorySection />
      <PopularAuthor />
    </>
  )
}

export default App
