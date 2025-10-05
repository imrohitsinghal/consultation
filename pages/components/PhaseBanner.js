export default function PhaseBanner({ phase, title }) {
  return (
    <div className='phase-banner'>
      <p className='phase-banner-text'>
        You are here → {phase}: {title}
      </p>
    </div>
  )
}
