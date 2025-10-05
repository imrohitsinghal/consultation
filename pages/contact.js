export default function Contact() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-3xl mx-auto px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center'>Contact Us</h1>

        <p className='text-gray-700 mb-6 text-lg'>
          We’re here to listen, guide, and support you — whether you’re facing challenges in your marriage or navigating
          the divorce process. Reach out today, and take the first step toward relief and clarity.
        </p>

        <form className='bg-white p-6 rounded-lg shadow space-y-4'>
          <div>
            <label className='block text-gray-700 mb-2'>Name</label>
            <input type='text' placeholder='Your Name' className='w-full border border-gray-300 rounded-md p-2' />
          </div>
          <div>
            <label className='block text-gray-700 mb-2'>Email</label>
            <input type='email' placeholder='Your Email' className='w-full border border-gray-300 rounded-md p-2' />
          </div>
          <div>
            <label className='block text-gray-700 mb-2'>Message</label>
            <textarea
              placeholder='Your Message'
              className='w-full border border-gray-300 rounded-md p-2 h-32'
            ></textarea>
          </div>
          <div className='text-center'>
            <button className='btn-primary' type='submit'>
              Send Message
            </button>
          </div>
        </form>

        <div className='text-center mt-8 text-gray-700'>
          Or reach us at: <strong>support@divorcecompanion.com</strong>
        </div>
      </div>
    </div>
  )
}
