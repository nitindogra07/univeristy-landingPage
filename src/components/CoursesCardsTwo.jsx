import CourseCard from "./CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

export default function CoursesCardsTwo() {
  const cardContent = [
    {
      heading: "Fellowship In clinical art",
      highlights: {
        one: "advance art",
        two: "In Vitro Fertilisation",
      },
      duration: "1 year",
    },
    {
      heading: "Advance certificate in clinical Art",
      highlights: {
        one: "Embryo manuplation",
        two: "Quality control",
        three : "Latest advances in reproductive medicines"
      },
      duration: "3 months"
    },
    {
      heading: "skill enhancing in clinical  art",
      highlights: {
        one: "clinical art",
        two: "clinical practices",
        three: "advance concepts of art",
      },
      duration: "1 month",
    },
  ];

  return (
    <div className="px-6 py-16 text-center">
      <h1 className="text-5xl mb-5 font-bold uppercase">
        Our Clinical{" "}
        <span className="text-text-secondary font-bold ">ART </span> Programs
      </h1>

      <p className="text-neutral-500 mb-10">
        Explore our ART courses to begin a journey toward becoming a skilled{" "}
        <br />
        reproductive specialist or advancing your career in assisted
        reproductive technology.
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
          className="pb-16"
        >
          {cardContent.map((ele, idx) => (
            <SwiperSlide key={idx}>
              <CourseCard content={ele} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
