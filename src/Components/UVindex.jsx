import React from "react";
import { BiSun } from "react-icons/bi";

const UVindex = ({ forecast }) => {
  const uvNumber = forecast?.uv || 0;

  return (
    <div className="h-44 lg:rounded-[2.5rem] flex flex-col justify-between p-6 rounded-2xl md:rounded-2xl bg-slate-50 text-center">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">UV index</p>
        <BiSun className="text-4xl text-white bg-blue-500 py-2 px-2 rounded-full"></BiSun>
      </div>
      <h1 className="text-3xl my-2 font-bold flex items-center justify-center">
        {uvNumber || 0}
        <span className="text-lg ml-1 font-normal">
          {uvNumber < 4 ? "low" : uvNumber < 8 ? "medium" : "high"}
        </span>
      </h1>
      <div className="grid grid-cols-5">
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">0-2</span>
          <progress
            className="progress progress-primary px-1"
            value={uvNumber > 2 ? 2 : uvNumber}
            max="2"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">3-5</span>
          <progress
            className="progress progress-primary px-1"
            value={uvNumber - 2 < 1 ? 0 : uvNumber - 2}
            max="3"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">6-7</span>
          <progress
            className="progress progress-primary px-1"
            value={uvNumber - 5 < 1 ? 0 : uvNumber - 5}
            max="2"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">8-10</span>
          <progress
            className="progress progress-primary px-1"
            value={uvNumber - 7 < 1 ? 0 : uvNumber - 7}
            max="3"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">11+</span>
          <progress
            className="progress progress-primary px-1"
            value={uvNumber - 10 < 1 ? 0 : uvNumber - 10}
            max="2"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default UVindex;
