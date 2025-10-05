import Link from 'next/link'
import PhaseBanner from './components/PhaseBanner'

export default function Phase1() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <PhaseBanner phase='Phase 1' title='Discernment' />

      <div className='section-container'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-6'>Finding Clarity in Your Marriage</h1>

        <p className='text-gray-700 mb-6 text-lg'>
          Are you feeling unhappy in your marriage, uncertain about your relationship, or wondering if divorce is the
          right step? You’re not alone. Many people struggle with these questions silently. At Divorce Companion, we
          provide a safe and empathetic space to explore your feelings and options without pressure or judgment.
        </p>

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

        <div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
          <Link href='/book' className='btn-primary'>
            Book a Clarity Session
          </Link>
          <Link href='/' className='btn-secondary'>
            ← Back to All Phases
          </Link>
        </div>
      </div>
    </div>
  )
}
