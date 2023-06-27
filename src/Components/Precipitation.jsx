import React from "react";
import { BsFillCloudDrizzleFill } from "react-icons/bs";

const Precipitation = ({ precipitation }) => {
  const precipAmount = parseFloat(precipitation?.precip_in) * 2.54;
  console.log(precipitation);
  return (
    <div className="h-44 lg:rounded-[2.5rem] flex flex-col justify-between p-6 rounded-2xl md:rounded-2xl bg-slate-50 text-center">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">UV index</p>
        <BsFillCloudDrizzleFill className="text-4xl text-white bg-blue-500 py-2 px-2 rounded-full"></BsFillCloudDrizzleFill>
      </div>
      <h1 className="text-3xl my-2 font-bold flex items-center justify-center">
        {precipAmount || 0}
        <span className="ml-1">cm</span>
      </h1>
      <div className="grid grid-cols-10">
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">0</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount > 2 ? 2 : precipAmount}
            max="2"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">3-5</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount - 2 < 1 ? 0 : precipAmount - 2}
            max="3"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">6-7</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount - 5 < 1 ? 0 : precipAmount - 5}
            max="2"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">8-10</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount - 7 < 1 ? 0 : precipAmount - 7}
            max="3"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">11+</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount - 10 < 1 ? 0 : precipAmount - 10}
            max="2"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">11+</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount - 10 < 1 ? 0 : precipAmount - 10}
            max="2"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">11+</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount - 10 < 1 ? 0 : precipAmount - 10}
            max="2"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">11+</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount - 10 < 1 ? 0 : precipAmount - 10}
            max="2"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">11+</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount - 10 < 1 ? 0 : precipAmount - 10}
            max="2"
          ></progress>
        </div>
        <div className="flex flex-col ">
          <span className="text-xs mb-[2px] text-slate-400">11+</span>
          <progress
            className="progress progress-primary px-1"
            value={precipAmount - 10 < 1 ? 0 : precipAmount - 10}
            max="2"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Precipitation;
