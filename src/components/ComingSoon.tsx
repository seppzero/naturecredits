import React, { useState, useEffect } from 'react'
import { withPrefix } from 'gatsby'

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Set target date - adjust this to your desired launch date
    const targetDate = new Date('2026-03-01T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="section-padding bg-stone-200 relative overflow-hidden"
      aria-labelledby="coming-soon-heading"
    >
        {/* Full background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={withPrefix("/design/Go_LIVE_bg.jpg")} 
            alt=""
            className="w-full h-full object-cover opacity-100"
            aria-hidden="true"
          />
        </div>

        <div className="container-80 relative z-10">
          <div className="section-content mx-auto text-center">
            {/* Coming Soon Badge */}
            <div className="section-badge bg-[#C17A4A] text-white">
              COMING SOON
            </div>

          <h2 
            id="coming-soon-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 leading-tight"
          >
            <span className="text-stone-400">Our full website</span><br />
            <span className="text-stone-600">goes <span className="text-stone-800">LIVE</span> in:</span>
          </h2>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 mb-8 sm:mb-12 md:mb-16" suppressHydrationWarning>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5A7A6E] mb-1 sm:mb-2" suppressHydrationWarning>
                {isClient ? String(timeLeft.days).padStart(2, '0') : '--'}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-stone-500 uppercase tracking-wide">
                Days
              </div>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5A7A6E] self-start pt-0">
              :
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5A7A6E] mb-1 sm:mb-2" suppressHydrationWarning>
                {isClient ? String(timeLeft.hours).padStart(2, '0') : '--'}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-stone-500 uppercase tracking-wide">
                Hours
              </div>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5A7A6E] self-start pt-0">
              :
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5A7A6E] mb-1 sm:mb-2" suppressHydrationWarning>
                {isClient ? String(timeLeft.minutes).padStart(2, '0') : '--'}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-stone-500 uppercase tracking-wide">
                Minutes
              </div>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5A7A6E] self-start pt-0">
              :
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5A7A6E] mb-1 sm:mb-2" suppressHydrationWarning>
                {isClient ? String(timeLeft.seconds).padStart(2, '0') : '--'}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-stone-500 uppercase tracking-wide">
                Seconds
              </div>
            </div>
          </div>

            <p className="text-base sm:text-lg md:text-xl text-stone-500 leading-relaxed px-4 sm:px-0">
              Until then, we're already partnering with forest owners to bring local nature credits projects to 
              life and would love to hear from you.
            </p>
          </div>
        </div>
    </section>
  )
}

export default ComingSoon
