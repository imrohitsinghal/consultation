export default function Services() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-5xl mx-auto px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center'>Our Services</h1>
        <p className='mb-6 text-lg text-gray-700'>
          Divorce is stressful. Our compassionate coaching sessions provide a safe space to express concerns and regain
          confidence.
        </p>
        <p className='text-gray-700 mb-6 text-lg'>
          At True Tomo, we provide a range of supportive services for anyone facing challenges in their marriage
          or navigating the divorce process. Our goal is to make you feel understood, guided, and supported every step
          of the way.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
          <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
            <h3 className='font-semibold text-lg mb-2'>Talk & Share</h3>
            <p className='text-gray-700'>
              One-on-one sessions to share your thoughts and emotions safely, helping you process feelings and reduce
              stress.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
            <h3 className='font-semibold text-lg mb-2'>Explore Options</h3>
            <p className='text-gray-700'>
              Guidance to understand your options, whether you are thinking about divorce or looking for ways to improve
              your marriage.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
            <h3 className='font-semibold text-lg mb-2'>Document & Case Guidance</h3>
            <p className='text-gray-700'>
              Support for reviewing agreements, communications, or documents, ensuring clarity without feeling
              overwhelmed.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
            <h3 className='font-semibold text-lg mb-2'>Emotional Wellbeing</h3>
            <p className='text-gray-700'>
              Compassionate support and coaching to manage anxiety, stress, and emotional trauma.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
            <h3 className='font-semibold text-lg mb-2'>Decision Support</h3>
            <p className='text-gray-700'>
              Helping you weigh choices, consider consequences, and make informed decisions for your future.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
            <h3 className='font-semibold text-lg mb-2'>Follow-Up & Ongoing Support</h3>
            <p className='text-gray-700'>
              Continuous guidance to ensure you feel supported throughout your journey, even after initial sessions.
            </p>
          </div>
        </div>

        <div className='text-center mt-10'>
          <a href='/book' className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
            Book a Session & Speak to Us
          </a>
        </div>
      </div>
    </div>
  )
}
