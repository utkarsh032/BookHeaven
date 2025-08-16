import React, { useState } from 'react'
import { FiEyeOff, FiUnlock, FiEye, FiBook } from 'react-icons/fi'
import { TfiEmail } from 'react-icons/tfi'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook } from 'react-icons/fa'

const API_URL = import.meta.env.VITE_API_URL

export const SignupForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })

      const data = await res.json()

      if (res.ok) {
        const token = data.token
        localStorage.setItem('token', token)

        let user = data.user
        if (!user) {
          const meRes = await fetch(`${API_BASE}/api/auth/me`, {
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
        }

        alert('Signup successful!')
        navigate('/')
      } else {
        alert(data.message || 'Signup failed')
      }
    } catch (error) {
      console.error(error)
      alert('Server error')
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
            <p className='mt-2 text-3xl font-semibold'>Create your account</p>
            <p className='text-sm'>Join and start your reading journey</p>
          </div>
        </div>

        {/* Signup Box */}
        <div className='bg-[var(--primary-foreground)] text-[var(--foreground)] p-6 rounded-lg shadow-md'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Name */}
            <div>
              <label htmlFor='name' className='block text-xs font-medium mb-1'>
                Name
              </label>
              <div className='flex items-center gap-2 px-3 py-2 border rounded-lg'>
                <TfiEmail />
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder='Choose a name'
                  required
                  className='w-full outline-none bg-transparent'
                />
              </div>
            </div>

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
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-xs font-medium mb-1'
              >
                Confirm Password
              </label>
              <div className='flex items-center gap-2 px-3 py-2 border rounded-lg'>
                <FiUnlock />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder='Confirm your password'
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
              className='w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white py-2 rounded-lg disabled:opacity-50'
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>

          {/* Divider */}
          <hr className='my-6 border-gray-300' />

          {/* Login Link */}
          <p className='text-center text-sm'>
            Already have an account?{' '}
            <Link to='/login' className='text-[var(--primary)] hover:underline'>
              Log In
            </Link>
          </p>
        </div>

        {/* Social Signup */}
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
