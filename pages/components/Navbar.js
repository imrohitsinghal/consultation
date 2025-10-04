import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo / Brand */}
          <div className='flex-shrink-0'>
            <Link href='/'>
              <span className='text-2xl font-bold text-blue-800 cursor-pointer'>Divorce Companion</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-6 items-center'>
            <Link href='/' className='hover:text-blue-600'>
              Home
            </Link>
            <Link href='/about' className='hover:text-blue-600'>
              About
            </Link>
            <Link href='/services' className='hover:text-blue-600'>
              Services
            </Link>
            <Link href='/faq' className='hover:text-blue-600'>
              FAQ
            </Link>
            <Link href='/contact' className='hover:text-blue-600'>
              Contact
            </Link>
            <Link href='/book' className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
              Book
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='text-gray-700 hover:text-blue-600 focus:outline-none'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                {isOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden px-4 pb-4 space-y-2 bg-white shadow-md'>
          <Link href='/' className='block hover:text-blue-600'>
            Home
          </Link>
          <Link href='/about' className='block hover:text-blue-600'>
            About
          </Link>
          <Link href='/services' className='block hover:text-blue-600'>
            Services
          </Link>
          <Link href='/faq' className='block hover:text-blue-600'>
            FAQ
          </Link>
          <Link href='/contact' className='block hover:text-blue-600'>
            Contact
          </Link>
          <Link
            href='/book'
            className='block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'
          >
            Book
          </Link>
        </div>
      )}
    </nav>
  )
}
