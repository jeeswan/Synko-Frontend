import React, { useRef, useEffect, useState } from 'react'
import dashboard1 from '../../assets/DashboardImg/dashboard1.png'
import dashboard2 from '../../assets/DashboardImg/dashboard2.png'
import dashboard3 from '../../assets/DashboardImg/dashboard3.png'

const images = [dashboard1, dashboard2, dashboard3]

const DashboardPreview = () => {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const slide = scrollContainer.children[index]
    if (!slide) return

    slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setActiveIndex(index)
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % images.length
      scrollToIndex(index)
    }, 3000) // scroll every 3s

    const onScroll = () => {
      const { scrollLeft } = scrollContainer
      const slides = Array.from(scrollContainer.children)

      let closestIndex = 0
      let closestDistance = Infinity

      slides.forEach((slide, idx) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
        const containerCenter = scrollLeft + scrollContainer.clientWidth / 2
        const distance = Math.abs(containerCenter - slideCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = idx
        }
      })

      setActiveIndex(closestIndex)
    }

    scrollContainer.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearInterval(interval)
      scrollContainer.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="relative -mt-16 px-30">
        {/* Header */}
        <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Explore the Dashboard</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
            See how Synko can help you manage your projects and tasks efficiently.
            </p>
        </div>

        {/* Carousel wrapper with snap */}
        <div className="overflow-x-hidden">
            <div
            ref={scrollRef}
            className="flex gap-6 pb-4 scroll-smooth snap-x snap-mandatory max-w-4xl mx-auto"
            >
            {images.map((img, i) => (
                <div
                key={i}
                className="min-w-[80vw] max-w-[700px] flex-shrink-0 bg-white shadow-lg rounded-lg p-6 snap-center"
                >
                <img src={img} alt={`Dashboard ${i + 1}`} className="w-full rounded-md mb-4" />
                </div>
            ))}
            </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
            {images.map((_, i) => (
            <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
                i === activeIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
            />
            ))}
        </div>
    </div>
  )
}

export default DashboardPreview