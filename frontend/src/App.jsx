import './App.css'
import { Navbar } from './Components/Navbar'
import { FeaturedSection } from './Pages/FeaturedSection'
import { HomePage } from './Pages/HomePage'

function App () {
  return (
    <>
      <Navbar />
      <HomePage />
      <FeaturedSection />
    </>
  )
}

export default App
