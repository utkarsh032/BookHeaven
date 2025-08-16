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
import { ReadBookPage } from './Pages/ReadBook/ReadBookPage'
import { PrivateRoute } from './Components/PrivateRoute'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Home/Landing */}
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

        {/* Public Auth */}
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />

        {/* Protected Routes */}
        <Route
          path='/books'
          element={
            <PrivateRoute>
              <AllbookPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/book/:id'
          element={
            <PrivateRoute>
              <ReadBookPage />
            </PrivateRoute>
          }
        />

        {/* You can also protect these individually if needed */}
        <Route
          path='/categories'
          element={
            <PrivateRoute>
              <CategorySection />
            </PrivateRoute>
          }
        />
        <Route
          path='/featured'
          element={
            <PrivateRoute>
              <FeaturedSection />
            </PrivateRoute>
          }
        />
        <Route
          path='/authors'
          element={
            <PrivateRoute>
              <PopularAuthor />
            </PrivateRoute>
          }
        />
        <Route
          path='/stats'
          element={
            <PrivateRoute>
              <StatisticsSection />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
