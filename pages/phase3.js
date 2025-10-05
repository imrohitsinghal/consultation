import Link from 'next/link'
import PhaseBanner from './components/PhaseBanner'
export default function Phase3() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <PhaseBanner phase='Phase 3' title='Rebuilding' />
      <br />
      <div className='max-w-5xl mx-auto px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-6'>Phase 3: Rebuilding – Life After Divorce</h1>
        <p className='text-gray-700 mb-6 text-lg'>
          The divorce may be over, but healing and rebuilding take time. This is your chance to rediscover yourself,
          build emotional resilience, and create a brighter future. We are here to walk with you through this new
          chapter.
        </p>

        <h2 className='text-2xl font-semibold text-blue-700 mb-4'>How We Support You</h2>
        <ul className='list-disc list-inside text-gray-700 mb-6 space-y-2'>
          <li>Emotional coaching to build strength and self-confidence</li>
          <li>Strategies for co-parenting and maintaining healthy relationships</li>
          <li>Financial recovery and planning for long-term stability</li>
          <li>Guidance in embracing new opportunities and personal growth</li>
        </ul>

        <p className='text-gray-700 mb-6 text-lg italic'>
          Rebuilding is a journey, not a race. With the right support, you can move forward with confidence and peace of
          mind.
        </p>

        <div className='text-center mt-8'>
          <Link href='/book' className='btn-primary'>
            Start Your Rebuilding Journey
          </Link>
          <Link href='/' className='btn-secondary'>
            ← Back to All Phases
          </Link>
        </div>
      </div>
    </div>
  )
}
