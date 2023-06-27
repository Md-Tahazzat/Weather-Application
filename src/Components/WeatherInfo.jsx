import React from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { BiSun } from "react-icons/bi";

const WeatherInfo = () => {
  return (
    <>
      <div className="flex px-10 md:px-0 items-center justify-between mt-8 md:mt-14 lg:mt-20">
        <MdOutlineArrowBackIosNew className="text-2xl text-white"></MdOutlineArrowBackIosNew>

        <h1 className="text-6xl ml-6 md:text-6xl lg:text-[8rem] font-bold text-center text-slate-50">
          27°
        </h1>
        <MdArrowForwardIos className="text-2xl text-white"></MdArrowForwardIos>
      </div>
      <h1 className="text-center mb-8 flex items-center gap-2 text-4xl text-slate-50 justify-center mt-4 mr-8">
        <BiSun></BiSun> Sunny
      </h1>
    </>
  );
};

export default WeatherInfo;
