export default function Footer() {
  return (
    <footer className='bg-gray-800 text-gray-200 py-8 mt-12'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <p className='text-sm'>&copy; 2025 Divorce Companion. All Rights Reserved.</p>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <a href='/privacy' className='hover:text-white'>
            Privacy Policy
          </a>
          <a href='/terms' className='hover:text-white'>
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}
