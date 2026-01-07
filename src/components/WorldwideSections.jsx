export default function WorldWide() {
  return (
    <div className="px-20 pb-20 flex ">
      <div className="flex flex-col gap-5 w-1/2 justify-center pr-8 py-5">
        <h1 className="text-text-secondary font-bold capitalize text-5xl">
          Empowering Students Nationwide
        </h1>
        <p className="text-md text-neutral-500">
          Our advanced programs in Clinical Embryology and Assisted Reproductive
          Technology (ART) attract aspiring professionals from every corner of
          India. With courses like Fellowship in Clinical ART, M.Sc. in Clinical
          Embryology, and hands-on ICSI training, we empower the next generation
          of fertility specialists through high-quality, practical education
          tailored to the evolving needs of the reproductive sciences industry.
        </p>
        <p className="text-md text-neutral-500">
          <ul className="list-disc pl-6">
            {[
              "Students enrolled from 25+ states and union territories",
              "Strong presence in both urban and rural regions",
              "Dedicated regional support and guidance centers",
            ].map((ele, idx) => {
              return <li>{ele}</li>;
            })}
          </ul>
        </p>
        <button className="w-fit">+ Read More</button>
      </div>
      <div className="w-1/2 px-10 flex justify-center items-center py-5 rounded-3xl">
        <img
          src="https://embryologytraining.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findian_map.52affaab.webp&w=3840&q=75"
          className="w-full"
          alt=""
        />
      </div>
    </div>
  );
}
