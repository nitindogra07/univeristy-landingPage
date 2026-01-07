import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

export default function HeroSection() {
  const images = [
    "https://embryologytraining.in/_next/image?url=%2Funiversity%2Fbatch-1-desc.webp&w=3840&q=75",
    "https://embryologytraining.in/_next/image?url=%2Funiversity%2Fbatch-2-desc.png&w=3840&q=75",
    "https://embryologytraining.in/_next/image?url=%2Funiversity%2Faward.webp&w=3840&q=75",
    "https://embryologytraining.in/_next/image?url=%2Funiversity%2Fcentres.png&w=3840&q=75",
    "https://embryologytraining.in/_next/image?url=%2Funiversity%2Fcourses.png&w=3840&q=75",
  ]

  return (
    <section className="relative h-[45vh] sm:h-[75vh] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="relative h-full w-full">
            <img
              src={img}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="hero-prev absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 py-2 px-3 pb-5 font-bold text-white hover:bg-black/60 transition text-4xl">
        ‹
      </button>

      <button className="hero-next absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 py-2 px-3 pb-5 font-bold text-white hover:bg-black/60 transition text-4xl">
        ›
      </button>
    </section>
  )
}
