import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">
        Divorce Consultation in India
      </h1>
      <p className="mb-8 text-lg text-gray-700 text-center max-w-xl">
        Get trusted advice and guidance for your legal separation or divorce process.
        Book a consultation with me for step-by-step help.
      </p>
      <div className="flex space-x-4">
        <Link href="/services" className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          Services
        </Link>
        <Link href="/book" className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700">
          Book Consultation
        </Link>
      </div>
    </main>
  )
}