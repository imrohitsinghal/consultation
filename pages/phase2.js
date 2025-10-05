import Link from 'next/link'
import PhaseBanner from './components/PhaseBanner'

export default function Phase2() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <PhaseBanner phase='Phase 2' title='Separation' />
      <br />
      <div className='max-w-5xl mx-auto px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-6'>
          Phase 2: Active Separation – Support During the Divorce Process
        </h1>
        <p className='text-gray-700 mb-6 text-lg'>
          Going through a divorce can feel overwhelming — emotionally, legally, and financially. We know this stage is
          heavy, and we’re here to provide clarity, compassion, and guidance as you move through it.
        </p>

        <h2 className='text-2xl font-semibold text-blue-700 mb-4'>How We Support You</h2>
        <ul className='list-disc list-inside text-gray-700 mb-6 space-y-2'>
          <li>Practical advice for managing legal processes and documents</li>
          <li>Support in communicating with lawyers and understanding your rights</li>
          <li>Financial planning resources to protect your stability</li>
          <li>Emotional support to reduce stress, trauma, and feelings of isolation</li>
        </ul>

        <p className='text-gray-700 mb-6 text-lg italic'>
          You don’t have to carry this alone. With the right support, you can move through this process with strength
          and clarity.
        </p>

        <div className='text-center mt-8'>
          <Link href='/book' className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
            Book a Support Session
          </Link>
          <Link href='/' className='px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition'>
            ← Back to All Phases
          </Link>
        </div>
      </div>
    </div>
  )
}
