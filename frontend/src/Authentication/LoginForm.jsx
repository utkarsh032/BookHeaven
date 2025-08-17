import React, { useState, useContext } from 'react'
import { FiEyeOff, FiUnlock, FiEye, FiBook } from 'react-icons/fi'
import { TfiEmail } from 'react-icons/tfi'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { AuthContext } from '../Context/AuthContext'
import { Slide, toast } from 'react-toastify'

const API_URL = import.meta.env.VITE_API_URL

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { setUser } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message || 'Login failed', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide
        })
        return
      }

      const token = data.token
      localStorage.setItem('token', token)

      let user = data.user

      if (!user) {
        const meRes = await fetch(`${API_URL}/api/auth/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        if (meRes.ok) {
          user = await meRes.json()
        }
      }

      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
      }

      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide
      })

      navigate('/')
    } catch (error) {
      toast.error(error || 'Server Error', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[var(--background)]'>
      <div className='w-full max-w-md p-6'>
        {/* Logo + Heading */}
        <div className='mb-6 flex flex-col items-center text-center text-[var(--primary)]'>
          <div className='flex items-center text-2xl font-bold mb-4'>
            <FiBook className='mr-2' />
            <p>BookHaven</p>
          </div>
          <div className='text-[var(--foreground)]'>
            <p className='mt-2 text-3xl font-semibold'>Welcome back</p>
            <p className='text-sm'>
              Sign in to your account to continue reading
            </p>
          </div>
        </div>

        {/* Login Box */}
        <div className='bg-[var(--primary-foreground)] text-[var(--foreground)] p-6 rounded-lg shadow-md'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Email */}
            <div>
              <label htmlFor='email' className='block text-xs font-medium mb-1'>
                Email Address
              </label>
              <div className='flex items-center gap-2 px-3 py-2 border rounded-lg'>
                <TfiEmail />
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
                  className='w-full outline-none bg-transparent'
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor='password'
                className='block text-xs font-medium mb-1'
              >
                Password
              </label>
              <div className='flex items-center gap-2 px-3 py-2 border rounded-lg'>
                <FiUnlock />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  required
                  className='w-full outline-none bg-transparent'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(prev => !prev)}
                  className='text-gray-500 hover:text-gray-700'
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type='submit'
              disabled={loading}
              className='w-full bg-[var(--primary)] hover:opacity-90 text-white py-2 rounded-lg disabled:opacity-50'
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            {/* Remember me & Forgot Password */}
            <div className='flex justify-between items-center text-sm mt-4'>
              <label className='flex items-center gap-2'>
                <input type='checkbox' id='remember' />
                Remember me
              </label>
              <Link to='/forgot-password' className='hover:underline'>
                Forgot Password?
              </Link>
            </div>
          </form>

          {/* Divider */}
          <hr className='my-6 border-gray-300' />

          {/* Sign Up Link */}
          <p className='text-center text-sm'>
            Don't have an account?{' '}
            <Link
              to='/signup'
              className='text-[var(--primary)] hover:underline'
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Social Login */}
        <div className='mt-6 flex flex-col gap-2 text-[var(--foreground)] bg-[var(--primary-foreground)] p-6 rounded-lg shadow-md'>
          <button className='w-full flex items-center justify-center gap-2 border py-1 rounded-lg bg-[var(--secondary)] hover:opacity-90'>
            <FaGoogle /> Continue with Google
          </button>
          <button className='w-full flex items-center justify-center gap-2 border py-1 rounded-lg bg-[var(--secondary)] hover:opacity-90'>
            <FaFacebook /> Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  )
}
