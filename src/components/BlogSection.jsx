import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";
export default function BlogSection() {
  const Careerlist = [
    "Junior Clinical Embryologist",
    "Reproductive Biologist",
    "Laboratory Manager",
    "Academician/Professor",
    "Consultant in Reproductive Medicine",
    "Genetic Counsellor",
  ];
  return (
    <div className="w-full flex py-10">
      <div className="flex flex-col gap-5 w-[65%] overflow-y-scroll h-dvh pt-15 pl-20 styledthumb pr-5">
        <h1 className="text-2xl font-medium">
          About the School of Embryology and Assisted Reproductive Technology
          (SEART)
        </h1>
        <span>
          <h2>Affiliated to Gurugram University</h2>
          <p>
            School of Embryology and Assisted Reproductive Technology (SEART) is
            registered under the Indian Trust Act 1882. SEART is an OFF-SITE
            Campus of Gurugram University, a prestigious university established
            by the Government of Haryana under the Haryana Act 17 of 2017 and
            recognized by UGC under section 22 of the UGC Act 1956.
          </p>
        </span>
        <span>
          <h2 className="text-2xl font-medium">Location and Facilities</h2>
          <p>
            Located in Gurugram (Gurgaon), SEART offers specialized training in
            clinical embryology through Undergraduate, Postgraduate, Diploma,
            PhD, and certificate courses. The institute is strategically located
            in the Delhi NCR region of India. SEART operates from a
            well-equipped campus that includes advanced laboratories,
            audio-visual classrooms, and medical services, ensuring a
            comprehensive learning experience.
          </p>
        </span>
        <span>
          <h2 className="text-2xl font-medium">Mission and Vision</h2>
          <p>
            SEART works with a mission to transform society through education
            and innovation. The Institute emphasizes developing a strong
            theoretical and practical base in clinical embryology, preparing
            graduates to excel in the field of assisted reproductive technology
            (ART) and reproductive science.
          </p>
        </span>

        <span>
          <h2 className="text-2xl font-medium">
            Training and Academic Excellence
          </h2>
          pSEART's curriculum is designed to provide in-depth knowledge and
          practical training in embryology and related fields. SEART focuses on
          both theoretical understanding and practical training. It prepares
          students for successful careers as embryologists and researchers in
          the emerging field of reproductive medicine. The Institute aims to
          promote academic excellence and professional competence among its
          students.
        </span>
        <span>
          <h1>Eligibility For Diploma in Clinical Embryology</h1>
          <p>
            This course is designed by SEART for candidates with or without any
            prior experience in Andrology or Embryology interested in
            senior-level positions as an Embryologist. Minimum Qualification:
            Post Graduates in Biological Sciences / Life Sciences MSc.
            Microbiology Biochemistry Biotechnology As per ART Rules and
            Regulations.
          </p>
        </span>
        <span>
          <h1>Duration For Diploma in Clinical Embryology</h1>
          <p>
            At SEART Institute, the Diploma in Clinical Embryology duration is 1
            year. This structured program is designed to provide comprehensive
            training in embryonic development, laboratory techniques, assisted
            reproductive technologies (ART), and ethical considerations in
            reproductive medicine.
          </p>
        </span>
        <span>
          <h1 className="text-2xl font-medium">
            Career Opportunities in Clinical Embryology
          </h1>
          <p>
            On successful completion of the course, candidates can seek
            employment as clinical embryologists with health care providers such
            as IVF centers/fertility clinics / ART clinics/hospitals. They can
            also work as consultants with multiple organizations.
          </p>

          <ul className="list-disc pl-6">
            {Careerlist.map((ele, idx) => {
              return <li>{ele}</li>;
            })}
          </ul>
        </span>
        <span>
          <h1 className="text-xl font-medium">
            Clinical Embryology Course Fees
          </h1>
          <p>
            The School of Embryology and Assisted Reproductive Technology
            (SEART) offers clinical embryology courses with fees ranging from
            ₹100,000 to ₹580,000. The exact fees you may pay may depend on
            several factors, such as: Course duration and type: Short-term
            certificate courses will generally be at the lower end of the fee
            range, while more comprehensive programs such as diplomas or degrees
            will be at the higher end. Specialization and depth: Advanced or
            specialized courses may come with higher fees, reflecting the depth
            and focus of the training. Additional costs: Be sure to take into
            account any additional costs such as materials, exams, or practical
            sessions. It is advisable to contact SEART directly for detailed and
            updated fee structures and to inquire about any available financial
            aid or payment options.
          </p>
        </span>
      </div>
      <div className="p-10 pl-15 w-[30%]  rounded-xl object-cover flex flex-col gap-3 bg-accent text-white">
        <img
          className="object-cover rounded-xl"
          src="https://embryologytraining.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact_us_01.febf0982.webp&w=3840&q=75"
          alt=""
          width={250}
        />
        <h1 className="font-medium text-2xl">Contact Us</h1>
        <p className="text-sm">
          If you have any questions about embryology, don't hesitate to contact
          us. Our dedicated team is ready to assist you throughout your
          educational journey.
        </p>
        <span className="flex gap-2 items-center">
          <IoIosCall />
          +91 70420 09545
        </span>
        <span className="flex gap-2 items-center">
          <IoIosCall />
          +91 98701 09545
        </span>
        <span className="flex gap-2  items-center">
          <MdEmail />
          admissions@embryologytraining.in
        </span>
        <span className="flex gap-2  items-center">
          <MdEmail />
          info@embryologytraining.in
        </span>
        <span className="gap-2 flex  items-center">
          <FaMapPin />
          Kannu Arcade, MG Road , Sector 14, Near Cloudnine Hospital,, Gurugram
          - 122001
        </span>
      </div>
    </div>
  );
}
