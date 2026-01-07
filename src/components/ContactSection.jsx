"use client";

export default function StudyAtSection() {
  const stats = [
    { title: "Expert-Led Training", value: "", desc: "" },
    { title: "Partner Centers", value: "10+", desc: "Partner Centers" },
    { title: "Faculty Members", value: "250+", desc: "Faculty Members" },
  ];

  return (
    <section className="bg-[#37425b] min-h-[100dvh] flex items-center py-10 items-center">
      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase leading-snug">
            Study at SEART
          </h1>

          <p className="text-white text-sm sm:text-base md:text-base max-w-3xl leading-relaxed">
            The School of Embryology & Assisted Reproductive Technology offers
            industry-focused education in reproductive sciences, combining
            theoretical knowledge with hands-on clinical and lab training.
            Our programs prepare students for successful careers in clinical
            embryology and assisted reproductive technology.
          </p>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1f364b] p-3 rounded-lg flex flex-col items-center text-center shadow-md hover:shadow-lg transition"
              >
                {stat.value && (
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{stat.value}</h2>
                )}
                <h3 className="text-xs sm:text-sm font-semibold text-white mt-1">
                  {stat.title}
                </h3>
                {stat.desc && (
                  <p className="text-[#f9c846] text-[10px] mt-1">{stat.desc}</p>
                )}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-4">
            <button className="bg-[#1f364b] text-white px-4 py-2 text-sm hover:bg-[#16293a] transition">
              About SEART →
            </button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#1f364b] sm:p-8 md:p-10 rounded-xl flex flex-col justify-center space-y-4 w-full max-w-md mx-auto mt-10">
          <form className="flex flex-col gap-5 py-15 ">
            <input
              type="text"
              placeholder="Enter Name *"
              className="w-full px-4 py-3 bg-white text-[#0b1d59] rounded-md focus:outline-none font-medium text-sm"
            />
            <input
              type="tel"
              placeholder="Enter Phone Number *"
              className="w-full px-4 py-3 bg-white text-[#0b1d59] rounded-md focus:outline-none font-medium text-sm"
            />
            <textarea
              rows="4"
              placeholder="Type Your Message"
              className="w-full px-4 py-3 bg-white text-[#0b1d59] rounded-md focus:outline-none font-medium text-sm"
            />
          </form>

          <button className="mt-2 bg-text-secondary text-white py-3 text-sm font-semibold hover:bg-[#35010e] transition w-full rounded-md">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
}
