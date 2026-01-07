export default function CampusInsights() {
  return (
    <div className="px-20 pb-20 flex py-20">
      <div className="flex flex-col gap-5 w-1/2 pr-8 py-5">
        <h1 className="text-text-secondary font-bold capitalize text-5xl">
          CAMPUS INSIGHTS
        </h1>
        <p className="text-md text-neutral-500">
          Welcome to the SEART School of Embryology and Assisted Reproductive
          Technology — where science meets passion and innovation drives
          learning. At SEART, students experience a dynamic blend of academic
          rigor, hands-on training, and real-world clinical exposure.
        </p>
        <p className="text-md text-neutral-500">
          This video offers a glimpse into the life at SEART — from cutting-edge
          lab work and certificate ceremonies to vibrant campus events and
          collaborative student projects. Every frame reflects our commitment to
          excellence in reproductive science and the development of skilled,
          confident professionals.
        </p>
        <button className="w-fit px-5 py-2.5 bg-text-primary text-white rounded-lg hover:scale-[1.02] hover:transition-all ease-in-out duration-200 hover:bg-text-secondary font-medium">
          Read More
          </button>
      </div>
      <div className="w-1/2 px-10 flex justify-center items-center py-5 rounded-3xl">
        <video
          src="https://embryologytraining.in/videos/seart-intro.mp4"
          controls
          autoPlay
          className="w-full"
        ></video>
      </div>
    </div>
  );
}
