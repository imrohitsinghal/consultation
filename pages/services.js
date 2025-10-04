import Link from 'next/link'

export default function Services() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Services</h1>
      <ul className="space-y-4 text-lg text-gray-700">
        <li>✅ 15-Minute Quick Advice Call</li>
        <li>✅ 30-Minute Detailed Consultation</li>
        <li>✅ Document Review & Suggestions</li>
      </ul>
      <Link href="/book" className="inline-block mt-6 px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700">
        Book a Session
      </Link>
    </div>
  )
}