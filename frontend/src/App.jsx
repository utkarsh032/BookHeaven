import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import CategorySection from './Pages/CategorySection'
import { FeaturedSection } from './Pages/FeaturedSection'
import { Footer } from './Pages/Footer'
import { HomePage } from './Pages/HomePage'
import { PopularAuthor } from './Pages/PopularAuthor'
import { StatisticsSection } from './Pages/StatisticsSection'
import { SignupForm } from './Authentication/SignUpForm'
import { LoginForm } from './Authentication/LoginForm'
import { AllbookPage } from './Pages/AllBooks.jsx/AllbookPage'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path='/'
          element={
            <>
              <HomePage />
              <FeaturedSection />
              <CategorySection />
              <PopularAuthor />
              <StatisticsSection />
            </>
          }
        />

        {/* Specific Route for Sign Up */}
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />

        <Route path='/books' element={<AllbookPage />} />

        {/* Example: direct access to sections (optional) */}
        <Route path='/categories' element={<CategorySection />} />
        <Route path='/featured' element={<FeaturedSection />} />
        <Route path='/authors' element={<PopularAuthor />} />
        <Route path='/stats' element={<StatisticsSection />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
