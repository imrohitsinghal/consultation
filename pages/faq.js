import { useState } from 'react'

const faqs = [
  {
    question: 'Who can benefit from speaking to Divorce Companion?',
    answer:
      'Anyone who is facing challenges in their marriage, unsure about divorce, or already going through separation can benefit from our empathetic guidance.',
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'We provide emotional support, practical guidance, document and case assistance, and help you make informed decisions while navigating your journey.',
  },
  {
    question: 'Is it confidential?',
    answer: 'Absolutely. All conversations are confidential and conducted in a safe, non-judgmental space.',
  },
  {
    question: 'Do I have to commit to divorce to speak to you?',
    answer:
      'Not at all. You can reach out whether you’re just exploring options, seeking clarity, or processing your feelings about your marriage or potential separation.',
  },
  {
    question: 'How do I book a session?',
    answer:
      'Simply click on the “Book a Session” button, select a suitable time, and we’ll connect with you for a supportive conversation.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-5xl mx-auto px-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center'>Frequently Asked Questions</h1>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition'>
              <button
                onClick={() => toggle(index)}
                className='w-full text-left flex justify-between items-center text-gray-800 font-semibold text-lg'
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && <p className='mt-2 text-gray-700'>{faq.answer}</p>}
            </div>
          ))}
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
