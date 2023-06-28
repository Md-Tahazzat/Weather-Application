import React, { useContext } from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { BiSun } from "react-icons/bi";
import { InfoContext } from "../Provider/Provider";

const WeatherInfo = ({ current, isLoading }) => {
  const { showCelsius } = useContext(InfoContext);
  return isLoading ? (
    <div className="w-ful h-3/6 text-slate-50 flex items-center justify-center">
      <span className="loading loading-spinner"></span>
    </div>
  ) : (
    <>
      <div className="flex px-10 md:px-0 items-center justify-between mt-8 md:mt-14 lg:mt-20">
        <MdOutlineArrowBackIosNew className="text-2xl text-white"></MdOutlineArrowBackIosNew>

        <h1 className="text-6xl ml-6 md:text-6xl lg:text-[8rem] font-bold text-center text-slate-50">
          {showCelsius
            ? parseInt(current?.feelslike_c) || 0
            : parseInt(current?.feelslike_f) || 0}
          °
        </h1>
        <MdArrowForwardIos className="text-2xl text-white"></MdArrowForwardIos>
      </div>
      <h1 className="ml-12 md:ml-0 md:text-left mb-8 flex items-center gap-2 text-2xl md:text-4xl text-slate-50 justify-center mt-4 mr-8">
        <img src={current?.condition?.icon} alt={current?.condition?.text} />{" "}
        {current?.condition?.text}
      </h1>
    </>
  );
};

export default WeatherInfo;
