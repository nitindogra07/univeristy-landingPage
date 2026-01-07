export default function CourseCard({ content }) {
  const { one, two , three } = content.highlights;
  const highlights = [one, two , three].filter(Boolean);

  return (
    <div className="bg-text-primary rounded-2xl my-5 mx-5 shadow-md p-8 flex flex-col justify-between hover:scale-[1.02] transition-all min-h-[435px] ">
      <div>
        <h3 className="text-2xl font-bold text-white mb-8">{content.heading}</h3>

        <ul className="space-y-2 mb-6 text-sm text-white min-h-[90px]">
          {highlights.map((text, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="font-bold">✓</span>
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/30 pt-4 mb-6 text-sm text-white">
        <p>
          <b>Duration:</b> {content.duration}
        </p>
        <p>
          <b>Total Semesters:</b> {content.semesters}
        </p>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-text-secondary text-white py-2.5 rounded-xl font-semibold hover:bg-text-secondary transition">
          Apply Now
        </button>
        <button className="flex-1 border border-white text-white py-2.5 rounded-xl font-semibold hover:bg-white hover:text-black transition">
          Read More
        </button>
      </div>
    </div>
  );
}
