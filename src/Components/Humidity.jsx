import React from "react";
import { LuDroplets } from "react-icons/lu";

const Humidity = ({ humidity }) => {
  console.log(humidity);
  return (
    <div className="h-44 lg:rounded-[2.5rem] flex flex-col justify-between p-6 rounded-2xl md:rounded-2xl bg-slate-50 text-center">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Humidity</p>
        <LuDroplets className="text-4xl text-white bg-blue-500 py-2 px-2 rounded-full"></LuDroplets>
      </div>
      <h1 className="text-3xl my-2 font-bold flex items-center justify-center">
        {humidity || 0}%
        <span className="text-lg ml-1 font-normal">
          {humidity < 34 ? "good" : humidity < 67 ? "normal" : "bad"}
        </span>
      </h1>
      <div className="grid grid-cols-3">
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">good</span>
          <progress
            className="progress progress-primary px-1"
            value={humidity > 34 ? 33 : humidity}
            max="33"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">normal</span>
          <progress
            className="progress progress-primary px-1"
            value={humidity - 33 > 33 ? 33 : humidity - 33}
            max="33"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">bad</span>
          <progress
            className="progress progress-primary px-1"
            value={humidity - 66 < 1 ? 0 : humidity - 66}
            max="34"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
