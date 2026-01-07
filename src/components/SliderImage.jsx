import { motion } from "motion/react";

export default function SliderImage() {
  const companyLogos = [
    "https://embryologytraining.in/our-centres/4.png",
    "https://embryologytraining.in/our-centres/5.png",
    "https://embryologytraining.in/our-centres/6.png",
    "https://embryologytraining.in/our-centres/3.png",
    "https://embryologytraining.in/our-centres/12.png",
  ];

  // ONLY 2x duplication (important)
  const logos = [...companyLogos, ...companyLogos , ...companyLogos , ...companyLogos];

  return (
    <div className="relative overflow-hidden bg-white py-10">

      {/* fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      {/* ROW 1 → LEFT */}
      <motion.div
       className="flex flex-nowrap pb-4 gap-5"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
      >
        {logos.map((logo, idx) => (
          <img
            key={`row1-${idx}`}
            src={logo}
            alt="Partner Centre"
            className="w-20 sm:w-24 md:w-28 shrink-0 object-contain opacity-80"
          />
        ))}
      </motion.div>

      {/* ROW 2 → RIGHT */}
      <motion.div
        className="flex flex-nowrap gap-5"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
      >
        {logos.map((logo, idx) => (
          <img
            key={`row2-${idx}`}
            src={logo}
            alt="Partner Centre"
            className="w-20 sm:w-24 md:w-28 shrink-0 object-contain opacity-80"
          />
        ))}
      </motion.div>

    </div>
  );
}
