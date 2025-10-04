export default function Contact() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <h1 className='text-3xl font-bold text-blue-800 mb-6'>Contact Us</h1>
      <p className='mb-6 text-gray-700'>
        Reach out for support, guidance, or to book a consultation. We are here to help you navigate this journey.
      </p>
      <form className='space-y-4'>
        <input type='text' placeholder='Name' className='w-full p-3 border rounded-lg' />
        <input type='email' placeholder='Email' className='w-full p-3 border rounded-lg' />
        <input type='tel' placeholder='Phone' className='w-full p-3 border rounded-lg' />
        <textarea placeholder='Message' className='w-full p-3 border rounded-lg h-32'></textarea>
        <button className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
          Send Message
        </button>
      </form>
      <div className='mt-8 text-gray-700'>
        <p>Email: support@divorcecompanion.in</p>
        <p>WhatsApp: +91-XXXXXXXXXX</p>
      </div>
    </div>
  )
}
