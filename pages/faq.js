export default function FAQ() {
  const faqs = [
    {
      question: 'What is a Divorce Companion?',
      answer:
        'A Divorce Companion provides guidance, emotional support, and practical advice throughout the divorce journey.',
    },
    {
      question: 'How can I book a consultation?',
      answer: 'You can book a session via our Book Consultation page using Cal.com or Calendly widget.',
    },
    {
      question: 'Do you provide legal advice?',
      answer:
        'We provide guidance and suggestions but do not replace a licensed lawyer. We help you understand options and next steps.',
    },
    {
      question: 'Is my consultation confidential?',
      answer: 'Absolutely. All sessions are private and your information is handled with the utmost confidentiality.',
    },
  ]

  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <h1 className='text-3xl font-bold text-blue-800 mb-8'>Frequently Asked Questions</h1>
      <div className='space-y-6'>
        {faqs.map((faq, index) => (
          <div key={index} className='border p-4 rounded-lg shadow hover:shadow-lg transition'>
            <h2 className='font-semibold text-lg'>{faq.question}</h2>
            <p className='text-gray-700 mt-2'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
