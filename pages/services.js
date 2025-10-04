import Link from 'next/link'

export default function Services() {
  return (
    <div className='p-10 max-w-3xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6 text-blue-800'>Services</h1>
      <p className='mb-6 text-lg text-gray-700'>
        Divorce is stressful. Our compassionate coaching sessions provide a safe space to express concerns and regain
        confidence.
      </p>
      <ul className='space-y-4 text-lg text-gray-700'>
        <li>
          ✅ 15-minute sessions for immediate guidance on pressing questions. Perfect for clarifying doubts or next
          steps.
        </li>
        <li>✅ 30-minute detailed consultations for in-depth support and strategy.</li>
        <li>
          ✅ We can help you review agreements, filings, and communications to ensure you understand implications and
          options.
        </li>
      </ul>
      <Link href='/book' className='inline-block mt-6 px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700'>
        Book Your Session
      </Link>
    </div>
  )
}