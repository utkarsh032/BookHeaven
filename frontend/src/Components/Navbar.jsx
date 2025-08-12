import { useState } from 'react'
import { FiBook, FiHome, FiMenu, FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { MdGridOn } from 'react-icons/md'
import { LuLibraryBig, LuUsers } from 'react-icons/lu'

export const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home', icon: <FiHome /> },
    { to: '/books', label: 'Library', icon: <LuLibraryBig /> },
    { to: '/category', label: 'Category', icon: <MdGridOn /> },
    { to: '/about', label: 'Author', icon: <LuUsers /> }
  ]

  return (
    <div className='max-w-7xl mx-auto sticky top-0 '>
      <nav className='backdrop-blur-md px-6 py-4 flex items-center justify-between '>
        {/* Logo */}
        <div className='flex items-center gap-2 cursor-pointer'>
          <FiBook className='h-8 w-8 text-primary' />
          <Link to='/' className='serif font-semibold text-xl text-primary'>
            BookHaven
          </Link>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-12'>
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={index}
                to={link.to}
                className={`flex items-center gap-2 transition-colors duration-200 
                ${
                  isActive
                    ? 'bg-[var(--beige)] text-[var(--accent-blue)] rounded-md py-1 px-2'
                    : 'text-[var(--warm-brown)] hover:text-[var(--accent-blue)]'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Desktop Auth Buttons */}
        <div className='hidden md:flex items-center gap-2'>
          <Link
            to='/login'
            className='text-[var(--warm-brown)] hover:text-[var(--accent-blue)]'
          >
            Login
          </Link>
          <span className='text-3xl'>/</span>
          <Link
            to='/signup'
            className='bg-[var(--accent-blue)] text-white py-1 px-2 rounded-md hover:opacity-90'
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden text-[var(--warm-brown)] text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='absolute top-full left-0 w-full bg-[var(--background)] shadow-md flex flex-col gap-4 p-4 md:hidden animate-slideDown'>
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={index}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 transition-colors duration-200 
                  ${
                    isActive
                      ? 'bg-[var(--beige)] text-[var(--accent-blue)] rounded-md py-1 px-2'
                      : 'text-[var(--warm-brown)] hover:text-[var(--accent-blue)]'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              )
            })}

            <div className='flex gap-2 pt-2 border-t border-gray-200'>
              <Link
                to='/login'
                onClick={() => setMenuOpen(false)}
                className='flex-1 text-center text-[var(--warm-brown)] hover:text-[var(--accent-blue)] py-1'
              >
                Login
              </Link>
              <Link
                to='/signup'
                onClick={() => setMenuOpen(false)}
                className='flex-1 text-center bg-[var(--accent-blue)] text-white py-1 rounded-md hover:opacity-90'
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
