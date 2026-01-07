"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Senior Embryologist",
    message:
      "Embryology Training has transformed my understanding of assisted reproductive technology. The hands-on approach is unmatched.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Rohan Mehta",
    role: "Fertility Specialist",
    message:
      "The faculty are incredibly knowledgeable, and the curriculum prepares you for real-world challenges in embryology.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Anjali Verma",
    role: "Clinical ART Researcher",
    message:
      "The training here fosters innovation and practical skills. I feel confident applying advanced techniques in my lab.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Karan Singh",
    role: "Embryologist",
    message:
      "Practical sessions helped me gain confidence in lab techniques, making theory easy to apply.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Neha Gupta",
    role: "Clinical ART Specialist",
    message:
      "Excellent mentorship and guidance. The training bridged the gap between academic knowledge and real-life application.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Dr. Aarav Joshi",
    role: "Research Fellow",
    message:
      "The course structure is perfect for mastering embryology and reproductive technologies.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Dr. Meera Iyer",
    role: "Clinical ART Consultant",
    message:
      "I loved the practical approach and personalized mentorship in every session.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 text-center ">
        <h2 className="text-5xl text capitalize font-bold mb-12 text-white uppercase ">
          What Our <span className="text-secondary">Alumni Say</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
                <div className="bg-text-primary rounded-xl p-6 min-h-[300px] flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="w-16 h-16 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
                <FaQuoteLeft className="text-white text-2xl mb-4" />
                <p className="text-white italic mb-4 flex-1">{t.message}</p>
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-gray-300 text-sm">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
