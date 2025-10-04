export default function About() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-5xl mx-auto px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center'>About Divorce Companion</h1>

        <p className='text-gray-700 mb-6 text-lg'>
          Divorce is one of life’s most challenging transitions. We understand — because we’ve been there. Divorce
          Companion was created by a team of individuals who have personally experienced the pain, confusion, and stress
          that comes with separation. Our mission is simple: to ensure that nobody has to face this journey alone or
          suffer in silence.
        </p>

        <p className='text-gray-700 mb-6 text-lg'>
          We provide empathetic guidance, practical advice, and emotional support to help you navigate the divorce
          process with clarity and confidence. All it takes is one conversation — sharing your feelings and concerns
          with people who truly understand what you’re going through.
        </p>

        <p className='text-gray-700 mb-6 text-lg'>
          Our team has helped many individuals regain peace of mind and make informed decisions during this difficult
          phase. We combine personal experience, compassion, and practical guidance to be your true companions — not
          just advisors.
        </p>

        <p className='text-gray-700 mb-6 text-lg text-center'>
          Remember, you don’t have to navigate this alone. <strong>Reach out today</strong> and let us help you take the
          first step towards relief and clarity.
        </p>

        <div className='text-center mt-8'>
          <a href='/book' className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
            Book a Session & Speak to Us
          </a>
        </div>
      </div>
    </div>
  )
}
