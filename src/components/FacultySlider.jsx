"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const facultyData = [
  {
    name: "Dr. Supriya Hajela",
    role: "Senior Lecturer",
    degree: "MBBS, MS",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fdr-supriya-hajela.webp&w=256&q=75",
  },
  {
    name: "Dr. Seema Mittal",
    role: "Senior Lecturer",
    degree: "MBBS, MS (Obg & Gyn)\nDirector, LMH Hospital, Rewari",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fdr-seema-mittal.webp&w=256&q=75",
  },
  {
    name: "Dr. Vatsal Thakral",
    role: "Senior Lecturer",
    degree: "MBBS, MS (Obs and Gynaecology), FMAS",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fdr-vatsal-thakral.webp&w=256&q=75",
  },
  {
    name: "Dr. Surbhi Gupta",
    role: "Senior Lecturer",
    degree: "",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fsurbhi.png&w=256&q=75",
  },
  {
    name: "Dr. Shilpa Doultani",
    role: "Senior Lecturer",
    degree: "Ph.D in Embryology, M.Sc Reproductive",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fdr-shilpa.png&w=256&q=75",
  },
  {
    name: "Dr. Supriya Hajela",
    role: "Senior Lecturer",
    degree: "MBBS, MS",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fdr-supriya-hajela.webp&w=256&q=75",
  },
  {
    name: "Dr. Seema Mittal",
    role: "Senior Lecturer",
    degree: "MBBS, MS (Obg & Gyn)\nDirector, LMH Hospital, Rewari",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fdr-seema-mittal.webp&w=256&q=75",
  },
  {
    name: "Dr. Vatsal Thakral",
    role: "Senior Lecturer",
    degree: "MBBS, MS (Obs and Gynaecology), FMAS",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fdr-vatsal-thakral.webp&w=256&q=75",
  },
  {
    name: "Dr. Surbhi Gupta",
    role: "Senior Lecturer",
    degree: "",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fsurbhi.png&w=256&q=75",
  },
  {
    name: "Dr. Shilpa Doultani",
    role: "Senior Lecturer",
    degree: "Ph.D in Embryology, M.Sc Reproductive",
    image:
      "https://embryologytraining.in/_next/image?url=%2Fimg%2Ffaculty%2Fdr-shilpa.png&w=256&q=75",
  },
];

export default function FacultyCardsSlider() {
  return (
    <section className="py-20 bg-white px-15">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#121d5f]">
          <span className="text-black">Meet Our</span> Top-Ranked Faculty
        </h2>
        <p className="text-center text-neutral-500 text-sm mt-3 mb-12">
          Learn from the best at SEART faculties <br /> with World-Class education and
          Hands-On Training
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".faculty-next",
            prevEl: ".faculty-prev",
          }}
          autoplay={{
            delay: 2000, // ✅ 2 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          spaceBetween={24}
          slidesPerView={5}
          breakpoints={{
            1280: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="pb-20"
        >
          {facultyData.map((faculty, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center h-[270px] hover:shadow-xl transition border border-neutral-300">
                {/* Avatar */}
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover rounded-full border-4 border-[#0f172a]"
                  />

                  <div className="absolute bottom-0 right-0 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm shadow">
                    🎓
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-[#121d5f]">
                  {faculty.name}
                </h3>
                <p className="text-sm font-medium text-gray-800 mt-1">
                  {faculty.role}
                </p>

                {faculty.degree && (
                  <p className="text-xs text-gray-500 mt-2 whitespace-pre-line">
                    {faculty.degree}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="faculty-prev p-4 border border-text-secondary text-text-secondary rounded-full hover:scale-105 transition">
            <FaLongArrowAltLeft />
          </button>
          <button className="faculty-next p-4 border border-text-secondary text-text-secondary rounded-full hover:scale-105 transition">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
}
