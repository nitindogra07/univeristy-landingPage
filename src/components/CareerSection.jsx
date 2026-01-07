export default function CareerSection() {
  const careers = [
    "Clinical Embryologist",
    "Junior Embryologist",
    "Senior Embryologist",
    "Assistant Embryologist",
    "Embryology Lab Director",
    "Reproductive Science Researcher",
    "Embryology Faculty",
    "ART Specialist",
    "Research Scientist",
    "Director of Fertility Center",
    "Genetic Counsellor",
    "Fertility Consultant",
    "Medical Writer",
  ];
  return (
    <div className="px-15 py-10 bg-accent flex ">
      <div className="py-10">
        <h1 className="text-3xl font-bold text-white">Career Opportunities After Embryology Courses</h1>
        <p className="text-left mt-5 text-neutral-300">
          Embryology is a field that is constantly growing and has great career
          prospects. Post Graduates in clinical embryology can start as junior
          in IVF laboratories, specializing in procedures such as IVF and ICSI.
          As they gain experience, they can move into managerial roles or become
          laboratory directors. A PhD in clinical embryology offers
          opportunities for research and advanced expertise in reproductive
          science.
        </p>
      </div>
      <div className="flex flex-wrap content-start justify-center gap-3 p-2 pl-20 ">
        {careers.map((ele, idx) => {
          return <Card text={ele} />;
        })}
      </div>
    </div>
  );
}

function Card({ text }) {
  return <div className="bg-text-primary text-white w-fit rounded-lg px-5 py-2 mr-5 max-h-12">{text}</div>;
}
