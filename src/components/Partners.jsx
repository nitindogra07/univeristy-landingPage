import SliderImage from "./SliderImage";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

export default function Partners() {
  return (
    <>
      <div className="px-10 py-20 pb-5 flex flex-col items-center justify-between gap-7 ">
        <h1 className="text-center text-5xl font-bold">
          Partnering with India’s most trusted <br />
          <span className="text-text-secondary ">IVF & Fertility Centres</span>
        </h1>
        <div className="flex gap-5">
          <span className="flex px-3 py-1 border border-black rounded-full  text-sm">
            <FaPeopleGroup className="text-xl text-text-secondary" />{""}
            <span className="ml-3 font-medium">10+ Partner</span>
          </span>
          <span className="flex px-3 py-1 border border-black rounded-full text-sm">
            <FaEarthAmericas className="text-xl text-text-secondary" />{""}
            <span className="ml-3 font-medium">Pan-India Presence</span>
          </span>
          <span className="flex px-3 py-1 border border-black rounded-full text-sm">
            <SlGraph className="text-xl text-text-secondary" />{""}
            <span className="ml-3 font-medium">High Success Rates</span>
          </span>
        </div>
      </div>
      <div className="mb-15">
        <SliderImage />
      </div>
    </>
  );
}
