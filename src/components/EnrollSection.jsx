export default function EnrollSection() {
  return (
    <section className="w-full bg-[#f6f7fb] py-20 px-20 mb-5 pt-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center py-5">
        {/* LEFT – IMAGES (CONTROLLED SIZE) */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Main Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://embryologytraining.in/_next/image?url=https%3A%2F%2Fembryologytraining.in%2Fuploads%2Fgallery%2Fimages%2F36-jpg.jpg&w=828&q=75"
                alt="SEART Training"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary Image */}
            <div className="absolute -bottom-8 -right-8 w-40 sm:w-48 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://embryologytraining.in/_next/image?url=https%3A%2F%2Fembryologytraining.in%2Fuploads%2Fgallery%2Fimages%2Fgallery-8-webp.webp&w=828&q=75"
                alt="SEART Lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="flex flex-col gap-5 py-5">
          <h1 className="font-bold text-4xl">
            Learn From Experts and Grow Your <span className="text-text-secondary">Embryology Practice</span>
          </h1>
          <p className="text-neutral-500">
            As India's leading embryology training center, we are committed to
            providing quality and practical training. This helps our students
            enhance their embryology skills so that they can provide better
            service to their patients. Learn from over 15 renowned embryologists
            in India. Our courses provide detailed and practical training in
            clinical embryology and reproductive science. Get the expertise and
            practical skills required for a successful career in assisted
            reproductive technology (ART) and related fields. Join us for
            UGC-recognized university embryology courses to enhance your
            knowledge and professional practice in this specialized domain.
          </p>
          <button className="w-fit px-5 py-2.5 bg-text-primary text-white rounded-lg hover:scale-[1.02] hover:transition-all ease-in-out duration-200 hover:bg-text-secondary font-medium">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}
