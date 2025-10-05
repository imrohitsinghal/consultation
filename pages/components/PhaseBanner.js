export default function PhaseBanner({ phase, title }) {
  return (
    <div className='bg-blue-100 border-b border-blue-300 py-4'>
      <div className='max-w-5xl mx-auto px-4 text-center'>
        <p className='text-blue-700 font-semibold'>
          You are here → {phase}: {title}
        </p>
      </div>
    </div>
  )
}
