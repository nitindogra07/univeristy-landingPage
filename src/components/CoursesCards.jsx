import CourseCard from "./CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

export default function CoursesCards() {
  const cardContent = [
    {
      heading: "B.Sc + M.Sc in Clinical Embryology (Integrated)",
      highlights: {
        one: "Theoretical and practical study of embryology",
        two: "Training related to Assisted Reproductive Technology (ART)",
      },
      duration: "5 Years",
      semesters: "10",
    },
    {
      heading: "M.Sc in Clinical Embryology",
      highlights: {
        one: "Theoretical and practical study of embryology",
        two: "Training related to Assisted Reproductive Technology (ART)",
      },
      duration: "2 Years",
      semesters: "4",
    },
    {
      heading: "Pg Diploma in clinical embryology",
      highlights: {
        one: "clinical Embrology",
        two: "clinical art",
        three: "demonstration & Hands-on Practical Training",
      },
      duration: "1 Years",
    },
    {
      heading: "Certificate Course in advance clinical embryology",
      highlights: {
        one: "advance art",
        two: "in virto fertilization",
        three: "Intractoplasmic sperm injection (ICSI).",
      },
      duration: "1 month",
    },
    {
      heading: "Certificate Course in advance ICSI (Hands-on Training)",
      highlights: {
        one: "advance art",
        two: "in virto fertilization",
        three: "Intractoplasmic sperm injection (ICSI).",
      },
      duration: "2 weeks",
    },
  ];

  return (
    <div className="px-15 py-16 text-center ">
      <h1 className="text-5xl mb-5 font-bold uppercase">
        Our Clinical{" "}
        <span className="text-text-secondary font-bold underline">
          Embryology
        </span>{" "}
        Programs
      </h1>

      <p className="text-neutral-500 mb-10">
        Explore our embryology courses to begin a journey toward becoming a
        skilled <br /> embryologist or advancing your career in reproductive
        science.
      </p>

      <section className="max-w-7xl mx-auto relative">
        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".course-next",
            prevEl: ".course-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          className="pb-16"
        >
          {cardContent.map((ele, idx) => (
            <SwiperSlide key={idx}>
              <CourseCard content={ele} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-8">
          <button className="course-prev p-4 border border-text-secondary text-text-secondary rounded-full hover:scale-105 transition">
            <FaLongArrowAltLeft />
          </button>
          <button className="course-next p-4 border border-text-secondary text-text-secondary rounded-full hover:scale-105 transition">
            <FaLongArrowAltRight />
          </button>
        </div>
      </section>
    </div>
  );
}
