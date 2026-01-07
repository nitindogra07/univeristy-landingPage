import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const feedbacks = [
  {
    name: "Nikhil Singh",
    role: "Clinical Embryology Student",
    feedback: `I am incredibly grateful to SEART for shaping my career in Clinical Embryology. 
The MSc program not only provided me with a deep understanding of embryology but also gave me hands-on experience in real clinical programs. 
The faculty is highly experienced and supportive, always ready to clear doubts and guide us through every step.`,
  },
  {
    name: "Samarth Kumar",
    role: "MSc Graduate",
    feedback: `The program exceeded my expectations. The curriculum is well-structured and the practical sessions helped me gain confidence in handling real clinical cases. 
SEART has truly provided an environment where learning is immersive and mentorship is personal.`,
  },
  {
    name: "Kanchan Saxena",
    role: "Laboratory Specialist",
    feedback: `I loved the balance of theory and practical exposure. Every lecture was insightful and the lab sessions were meticulously organized. 
Thanks to SEART, I feel fully equipped to enter the professional world of Clinical Embryology with strong skills and knowledge.`,
  },
];

export default function TestimonialSection() {
  return (
    <div className="bg-accent text-white py-16 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-sm tracking-widest text-gray-400 border border-gray-400 px-3 py-1 rounded-full">
          FEEDBACK
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Feedback Shared By Our National and <span className="text-secondary"> International Students</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Join hundreds of students finding their path to success.
        </p>

        {/* Rating */}
        <div className="flex justify-center mt-6 gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
          <span className="text-gray-400 text-sm ml-3">
            Trusted by <b>500+ professionals</b>
          </span>
        </div>
      </div>

      {/* Swiper */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          className="pb-10"
        >
          {feedbacks.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-text-primary rounded-xl p-8 shadow-lg h-full">
                <p className="text-gray-200 leading-relaxed mb-6">
                  “{item.feedback}”
                </p>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
