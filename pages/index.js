import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-blue-50 py-20'>
        <div className='max-w-5xl mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-blue-800 mb-6'>
            You’re Not Alone- Here to Listen, Guide, and Support You
          </h1>
          <p className='text-gray-700 mb-8 text-lg md:text-xl'>
            Whether you’re uncertain about your marriage, in the middle of a divorce, or finding your way forward after
            separation —<strong> Divorce Companion</strong> is here to walk with you. We’ve lived through it ourselves,
            and our mission is to make sure no one feels alone.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link href='/book' className='btn-primary'>
              Speak to Us Today
            </Link>
            <Link href='/services' className='btn-primary-blue'>
              Learn How We Can Help
            </Link>
          </div>
        </div>
      </section>

      {/* Phase Options Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-blue-800 mb-10'>Choose Your Path</h2>
          <p className='text-gray-700 mb-12 text-lg'>
            Every journey is different. Select the stage that best reflects where you are right now, and explore
            resources tailored for you.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Phase 1 Card */}
            <div className='card'>
              <h3 className='card-title'>Phase 1: Discernment</h3>
              <p className='card-text'>
                Feeling unhappy in your marriage or unsure if divorce is the right step? Explore guidance to help you
                find clarity and confidence.
              </p>
              <Link href='/phase1' className='text-green-600 font-semibold hover:underline'>
                Explore Discernment →
              </Link>
            </div>

            {/* Phase 2 Card */}
            <div className='card'>
              <h3 className='card-title'>Phase 2: Separation</h3>
              <p className='card-text'>
                Already in the divorce process? Get emotional support, legal clarity, and financial guidance to manage
                this stage with strength.
              </p>
              <Link href='/phase2' className='text-green-600 font-semibold hover:underline'>
                Explore Separation →
              </Link>
            </div>

            {/* Phase 3 Card */}
            <div className='card'>
              <h3 className='card-title'>Phase 3: Rebuilding</h3>
              <p className='card-text'>
                Life after divorce can be overwhelming, but it’s also a chance to rebuild. Discover support for
                emotional healing, co-parenting, and financial recovery.
              </p>
              <Link href='/phase3' className='text-green-600 font-semibold hover:underline'>
                Explore Rebuilding →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-5xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-blue-800 mb-10'>Why You Can Trust Us</h2>
          <p className='text-gray-700 mb-6 text-lg'>
            We are not just advisors — we are people who have personally experienced the ups and downs of marriage and
            divorce. We know the sleepless nights, the anxiety, the stress, and the sense of isolation. Our mission is
            to ensure that nobody suffers alone or silently.
          </p>
          <p className='text-gray-700 mb-6 text-lg'>
            All it takes is one conversation. Sharing your thoughts and feelings in a safe, understanding space can be
            the first step toward relief, clarity, and confidence. Whether you are uncertain, unhappy, or already in the
            midst of separation, we are here to listen and guide you.
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
                Start with a safe conversation where you can share your feelings freely, without judgment.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Explore Options</h3>
              <p className='text-gray-700'>
                Understand your options and next steps whether you are considering divorce or figuring out solutions
                within your marriage.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Guidance & Support</h3>
              <p className='text-gray-700'>
                Receive advice and practical guidance for documents, agreements, or decisions during separation.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Emotional Wellbeing</h3>
              <p className='text-gray-700'>
                We provide compassionate support to reduce anxiety, stress, and emotional trauma.
              </p>
            </div>
          </div>
          <div className='mt-10'>
            <Link href='/book' className='btn-primary'>
              Book a Session & Feel Relief
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
