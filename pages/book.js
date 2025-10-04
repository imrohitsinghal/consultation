export default function Book() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Book Consultation</h1>
      <p className="text-gray-600 mb-4">
        Select a time slot that works for you. Payments will be handled securely via Razorpay/UPI.
      </p>
      <div className="border rounded-lg shadow p-4">
        {/* Replace below with your Cal.com/Calendly embed */}
        <iframe 
          src="https://cal.com/your-username"
          style={{width: "100%", height: "600px"}}
        />
      </div>
    </div>
  )
}