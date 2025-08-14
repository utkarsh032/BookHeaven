import React from 'react'
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiBook
} from 'react-icons/fi'

export function Footer () {
  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiGithub, href: '#', label: 'Github' }
  ]

  const footerLinks = [
    {
      title: 'About',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Our Mission', href: '#' },
        { label: 'Team', href: '#' },
        { label: 'Careers', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '#' },
        { label: 'Help Center', href: '#' },
        { label: 'Reading Guide', href: '#' },
        { label: 'FAQ', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'DMCA', href: '#' }
      ]
    }
  ]

  return (
    <footer className='bg-[var(--background)] border-t border-[var(--border)] '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-2 mb-4'>
              <FiBook className='h-8 w-8 text-[var(--primary)]' />
              <span className='serif font-semibold text-xl text-[var(--primary)]'>
                BookHaven
              </span>
            </div>
            <p className='text-[var(--muted-foreground)] mb-6 max-w-md'>
              Your gateway to endless stories. Discover, read, and share your
              favorite books in our cozy digital library. Join a community of
              passionate readers.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map(social => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className='text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200'
                  >
                    <IconComponent className='h-5 w-5' />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map(section => (
            <div key={section.title} className=''>
              <h3 className='serif font-medium text-[var(--foreground)] mb-4'>
                {section.title}
              </h3>
              <ul className='space-y-3  grid grid-cols-2'>
                {section.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className='text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 pt-8 border-t border-[var(--border)]'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <p className='text-[var(--muted-foreground)] text-sm'>
              © 2025 BookHaven. All rights reserved.
            </p>
            <p className='text-[var(--muted-foreground)] text-sm mt-2 sm:mt-0'>
              Made with ❤️ for FiBook lovers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
