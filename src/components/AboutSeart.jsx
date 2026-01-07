"use client";

export default function AboutSeart() {
  return (
    <section className="w-full bg-[#f6f7fb] py-5 px-20 pt-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT – IMAGES (CONTROLLED SIZE) */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md lg:max-w-lg">

            {/* Main Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://embryologytraining.in/_next/image?url=%2Fimg%2Fhome%2Fhero-img-1.webp&w=828&q=75"
                alt="SEART Training"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary Image */}
            <div className="absolute -bottom-8 -right-8 w-40 sm:w-48 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://embryologytraining.in/_next/image?url=%2Fimg%2Fhome%2Fhero-img-2.webp&w=828&q=75"
                alt="SEART Lab"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6 mt-30">
            A Premier Institute For <br />
            <span className="text-text-secondary">Clinical Embryology Education</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
            SEART is India’s leading institute for clinical embryology,
            combining academic excellence with hands-on training in assisted
            reproductive technology to prepare future healthcare leaders.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-2 mb-12">
            {[
              "UGC-Approved University Programs",
              "Expert Clinical Faculty",
              "Hands-on Training In Fertility Centres",
              "Advanced Labs & Modern Infrastructure",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 bg-[#20364b] p-2 rounded-xl shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                  ✓
                </div>
                <p className="text-sm font-medium text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>

        
        </div>

      </div>
    </section>
  );
}
