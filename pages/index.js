import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-blue-50 py-20'>
        <div className='max-w-5xl mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-blue-800 mb-6'>
            You Are Not Alone in Your Divorce Journey
          </h1>
          <p className='text-gray-700 mb-8 text-lg md:text-xl'>
            Divorce is one of life’s most challenging transitions. The confusion, stress, and emotional trauma can feel
            overwhelming. We understand — because we’ve been there too.
            <strong> Divorce Companion</strong> is a group of people who have walked this path and are here to guide
            you, support you, and help you reclaim clarity and peace of mind.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link href='/book' className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
              Speak to Us Today
            </Link>
            <Link href='/services' className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
              Learn How We Can Help
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-5xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-blue-800 mb-10'>Why You Can Trust Us</h2>
          <p className='text-gray-700 mb-6'>
            We are not just advisors; we are people who have experienced divorce ourselves. We know the sleepless
            nights, the anxiety, the stress, and the sense of isolation. Our mission is to ensure that nobody suffers
            alone or silently.
          </p>
          <p className='text-gray-700 mb-6'>
            All it takes is one conversation. Sharing your feelings, talking through your options, and receiving
            guidance from people who understand can make the overwhelming manageable. We provide a safe, non-judgmental
            space for you to express yourself and gain clarity.
          </p>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className='py-16 bg-blue-50'>
        <div className='max-w-5xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-blue-800 mb-10'>How We Support You</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Talk & Share</h3>
              <p className='text-gray-700'>
                Start with a safe conversation where you can share your feelings and experiences freely.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Practical Guidance</h3>
              <p className='text-gray-700'>
                Understand your options and next steps during the divorce process, from legal to emotional.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Document & Case Support</h3>
              <p className='text-gray-700'>
                We help review agreements and filings, ensuring clarity without feeling overwhelmed.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Emotional Wellbeing</h3>
              <p className='text-gray-700'>
                Receive compassionate coaching and support to reduce anxiety, stress, and trauma.
              </p>
            </div>
          </div>
          <div className='mt-10'>
            <Link href='/book' className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
              Book a Session & Feel Relief
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
