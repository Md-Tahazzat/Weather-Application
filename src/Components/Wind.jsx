import React from "react";
import { FaWind } from "react-icons/fa";

const Wind = ({ current, isLoading }) => {
  const wind = current?.wind_kph;
  return (
    <div className="h-44 lg:rounded-[2.5rem] flex flex-col justify-between p-6 rounded-2xl md:rounded-2xl bg-slate-50 text-center">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Wind</p>
        <FaWind className="text-4xl text-white bg-blue-500 py-2 px-2 rounded-full"></FaWind>
      </div>
      {isLoading ? (
        <div className="w-ful h-full flex text-primary items-center justify-center">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <div className="relative mx-auto text-primary">
          <div
            className="radial-progress -rotate-90 text-slate-200"
            style={{ "--value": 50, "--size": "7rem", "--thickness": "8px  " }}
          >
            <span className="absolute -top-4 text-xs text-black left-[54px] rotate-90">
              0
            </span>
            <span className="absolute top-[50px] text-xs text-black left-28 rotate-90">
              25
            </span>
            <span className="absolute top-[114px] text-xs text-black right-12 rotate-90">
              50
            </span>
            <p className="rotate-90 flex flex-col text-black">
              <span className="text-4xl font-bold">{parseInt(wind) || 0}</span>
              km/h
            </p>
          </div>
          <div
            className="radial-progress -rotate-90 absolute top-0 left-0 mx-auto"
            style={{
              "--value": parseInt(wind) || 0,
              "--size": "7rem",
              "--thickness": "8px  ",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Wind;
