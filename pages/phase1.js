import Link from 'next/link'
import PhaseBanner from './components/PhaseBanner'

export default function Phase1() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
          <PhaseBanner phase='Phase 1' title='Discernment' />
          <br />
      <div className='max-w-5xl mx-auto px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-6'>
          Phase 1: Discernment – Finding Clarity in Your Marriage
        </h1>
        <p className='text-gray-700 mb-6 text-lg'>
          Are you feeling unhappy in your marriage, uncertain about your relationship, or wondering if divorce is the
          right step? You’re not alone. Many people struggle with these questions silently. At Divorce Companion, we
          provide a safe and empathetic space to explore your feelings and options without pressure or judgment.
        </p>

        <h2 className='text-2xl font-semibold text-blue-700 mb-4'>How We Support You</h2>
        <ul className='list-disc list-inside text-gray-700 mb-6 space-y-2'>
          <li>Confidential conversations to share your thoughts and emotions</li>
          <li>Guidance to reflect on your options and next steps</li>
          <li>Support to reduce stress, confusion, and anxiety</li>
          <li>Resources to strengthen clarity and confidence in decision-making</li>
        </ul>

        <p className='text-gray-700 mb-6 text-lg italic'>
          Remember — you don’t have to decide everything today. Taking time to talk and reflect is the first step toward
          peace of mind.
        </p>

        <div className='text-center mt-8'>
          <Link href='/book' className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
            Book a Clarity Session
          </Link>
          <Link href='/' className='px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition'>
            ← Back to All Phases
          </Link>
        </div>
      </div>
    </div>
  )
}
