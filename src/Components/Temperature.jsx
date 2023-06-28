import React from "react";
import { FaThermometerThreeQuarters } from "react-icons/fa";

const Temperature = ({ temperature, isLoading }) => {
  return (
    <div className="h-44 lg:rounded-[2.5rem] flex flex-col justify-between p-6 rounded-2xl md:rounded-2xl bg-slate-50 text-center">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Feels like</p>
        <FaThermometerThreeQuarters className="text-4xl text-white bg-blue-500 py-2 px-2 rounded-full"></FaThermometerThreeQuarters>
      </div>
      {isLoading ? (
        <div className="w-ful h-full flex text-primary items-center justify-center">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <>
          <h1 className="text-3xl my-2 font-bold">
            {parseInt(temperature?.feelslike_c) || 0}°
          </h1>
          <div className="flex flex-col">
            <div className="flex items-center mb-1 justify-between text-xs text-slate-400">
              <span className="ml-1">0°</span>
              <span className="ml-2">25°</span>
              <span className="mr-1">50°</span>{" "}
            </div>
            <progress
              className="progress progress-primary px-1"
              value={temperature?.feelslike_c || 0}
              max="50"
            ></progress>
          </div>
        </>
      )}
    </div>
  );
};

export default Temperature;
