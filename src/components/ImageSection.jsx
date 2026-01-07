"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const galleryImages = [
  "https://embryologytraining.in/_next/image?url=%2Fimg%2Fgallery%2F36.jpg&w=640&q=75",
  "https://embryologytraining.in/_next/image?url=%2Fimg%2Fgallery%2FWhatsApp-Image-2022-03-08-at-11.13.37-PM-1-1.jpeg&w=640&q=75",
  "https://embryologytraining.in/_next/image?url=%2Fimg%2Fgallery%2FWhatsApp-Image-2022-03-08-at-11.18.17-PM-2.jpeg&w=640&q=75",
  "https://embryologytraining.in/_next/image?url=%2Fimg%2Fgallery%2FWhatsApp-Image-2022-08-17-at-11.43.00-AM.jpeg&w=640&q=75",
  "https://embryologytraining.in/_next/image?url=%2Fimg%2Fgallery%2FWhatsApp-Image-2022-08-17-at-11.43.01-AM.jpeg&w=640&q=75",
  "https://embryologytraining.in/_next/image?url=%2Fimg%2Fgallery%2FIMG-20240315-WA0014.jpg&w=640&q=75"
];

export default function TrainingCenterGallery() {
  return (
    <section className="bg-white py-18">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">
          Explore Our <span className="text-text-secondary">Training Center</span>
        </h2>
        <p className="text-neutral-500 text-sm md:text-base mb-10">
          Take a glimpse at our state-of-the-art facilities,<br /> modern classrooms, and hands-on training labs for embryology and ART.
        </p>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-64 md:h-80 lg:h-72 xl:h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
