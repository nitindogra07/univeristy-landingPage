export default function CampusSection() {
  return (
    <div className="px-20 pb-20 flex">
      <div className="flex flex-col gap-5 w-1/2 pr-8 py-5">
        <h1 className="text-text-secondary font-bold  text-5xl">CAMPUS LIFE</h1>
        <p className="text-md text-neutral-500">
          At SEART School of Embryology and Assisted Reproductive Technology,
          campus life is vibrant, engaging, and centered around academic
          excellence and personal growth. From hands-on laboratory work and
          real-time clinical training to collaborative research and innovation,
          students are constantly immersed in meaningful educational
          experiences. The campus also hosts a variety of events including
          certificate ceremonies, student exhibitions, and cultural celebrations
          that reflect the achievements and spirit of the SEART community.
          Whether it’s capturing memorable moments during academic milestones or
          participating in themed events and workshops, campus life at SEART
          fosters a strong sense of community and professionalism.
        </p>
        <p className="text-md text-neutral-500">
          The campus also hosts a variety of events including certificate
          ceremonies, student exhibitions, and cultural celebrations that
          reflect the achievements and spirit of the SEART community. Whether
          it’s capturing memorable moments during academic milestones or
          participating in themed events and workshops, campus life at SEART
          fosters a strong sense of community and professionalism.
        </p>
        <button className="w-fit px-5 py-2.5 bg-text-primary text-white rounded-lg hover:scale-[1.02] hover:transition-all ease-in-out duration-200 hover:bg-text-secondary font-medium">
          Read More
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 w-1/2 px-5 py-5 bg-accent rounded-3xl">
        <div>
          <img
            src="https://embryologytraining.in/_next/image?url=https%3A%2F%2Fembryologytraining.in%2Fuploads%2Fgallery%2Fimages%2Fwhatsappimage2024-11-23at11-02-58-6095efb4-jpg.jpg&w=828&q=75"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://embryologytraining.in/_next/image?url=https%3A%2F%2Fembryologytraining.in%2Fuploads%2Fgallery%2Fimages%2Fwhatsappimage2025-03-12at22-36-16-a9b6955a-jpg.jpg&w=828&q=75"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://embryologytraining.in/_next/image?url=https%3A%2F%2Fembryologytraining.in%2Fuploads%2Fgallery%2Fimages%2Fdsc-1359-1-jpg.JPG&w=828&q=75"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://embryologytraining.in/_next/image?url=https%3A%2F%2Fembryologytraining.in%2Fuploads%2Fgallery%2Fimages%2Fdsc-1481-jpg.JPG&w=828&q=75"
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
