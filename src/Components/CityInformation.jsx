import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";

const CityInformation = ({}) => {
  return (
    <div className="mt-14 text-white lg:mt-16 flex items-center justify-between">
      <div className="">
        <h1 className="text-[1.3rem] mb-1 font-semibold flex items-center gap-2">
          <FaLocationArrow className="text-slate-300 text-sm"></FaLocationArrow>{" "}
          New York, USA
        </h1>
        <h4 className="text-lg font-semibold">Today 28 Sept</h4>
      </div>
      <div className="font-semibold">
        <p className="flex items-center gap-2 mb-2">
          <FiSunrise className="font-bold text-slate-50"></FiSunrise>07:19
        </p>
        <p className="flex items-center gap-2">
          <FiSunset className="font-bold text-slate-50"></FiSunset>07:19
        </p>
      </div>
    </div>
  );
};

export default CityInformation;
