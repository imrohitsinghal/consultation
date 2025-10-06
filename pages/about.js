export default function About() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-5xl mx-auto px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center'>About True Tomo</h1>

        <p className='text-gray-700 mb-6 text-lg font-bold'>
          Divorce is one of life’s most challenging transitions. We understand — because we’ve been there.
        </p>
        <p className='text-gray-700 mb-6 text-lg' >
          Whether you’re feeling unsure about your marriage, unhappy with your current situation, or already going
          through a divorce, it’s perfectly normal to feel stressed, anxious, or overwhelmed. You don’t have to face it
          alone. True Tomo was created by a team of individuals who have personally navigated both the struggles
          of challenging marriages and the divorce process. Our mission is simple: to ensure nobody has to endure this
          journey in isolation or with unnecessary stress.
        </p>
        <p className='text-gray-700 mb-6 text-lg'>
          We provide empathetic guidance, practical advice, and emotional support to help you:
          <ul className='list-disc list-inside mt-2 space-y-1'>
            <li>Explore your feelings and understand your options</li>
            <li>Make informed decisions if you are considering divorce</li>
            <li>Receive support and clarity while going through the divorce process</li>
            <li>Regain peace of mind and confidence</li>
          </ul> <br />
          All it takes is one conversation to feel relief and perspective.
        </p>

        <p className='text-gray-700 mb-6 text-lg'>
          Our team combines personal experience, compassion, and practical guidance to be your true companions — not
          just advisors. We understand the emotional, mental, and practical challenges of these situations and are here
          to guide you every step of the way.
        </p>

        <p className='text-gray-700 mb-6 text-lg text-center'>
          Remember, whether you are uncertain, unhappy, or already in the midst of separation,{' '}
          <strong>you don’t have to navigate this alone. </strong>
          Reach out today and take the first step toward clarity, confidence, and relief.
              </p>
              
        <div className='text-center mt-8'>
          <a href='/book' className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
            Book a Session & Speak to Us
          </a>
              </div>
         <br />
        <p className='text-gray-700 mb-6 text-lg italic'>
          Every situation is unique, and there’s no one-size-fits-all solution. Whether you need someone to simply
          listen, help you weigh your options, or guide you through the steps of separation, our team is here for you.
          Sharing your thoughts and feelings in a safe, understanding space can be the first step toward relief and
          clarity.
        </p>

        
      </div>
    </div>
  )
}
