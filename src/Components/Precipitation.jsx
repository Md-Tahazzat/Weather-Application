import React from "react";
import { BsFillCloudDrizzleFill } from "react-icons/bs";

const Precipitation = ({ current, isLoading }) => {
  const precipAmount = parseFloat(current?.precip_in) * 2.54 || 0;
  return (
    <div className="h-44 lg:rounded-[2.5rem] flex flex-col justify-between p-6 rounded-2xl md:rounded-2xl bg-slate-50 text-center">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Precipitation</p>
        <BsFillCloudDrizzleFill className="text-4xl text-white bg-blue-500 py-2 px-2 rounded-full"></BsFillCloudDrizzleFill>
      </div>
      {isLoading ? (
        <div className="w-ful h-full flex text-primary items-center justify-center">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <>
          <h1 className="text-3xl my-2 font-bold flex items-center justify-center">
            {precipAmount.toFixed(1)}
            <span className="ml-1">cm</span>
          </h1>
          <div className="grid grid-cols-10">
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">0</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount > 0.9 ? 0.9 : precipAmount}
                max=".9"
              ></progress>
            </div>
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">10</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount - 0.9 > 1 ? 0.9 : precipAmount - 0.9}
                max=".9"
              ></progress>
            </div>
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">20</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount - 1.9 > 1 ? 0.9 : precipAmount - 1.9}
                max=".9"
              ></progress>
            </div>
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">30</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount - 2.9 > 1 ? 0.9 : precipAmount - 2.9}
                max=".9"
              ></progress>
            </div>
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">40</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount - 3.9 > 1 ? 0.9 : precipAmount - 3.9}
                max=".9"
              ></progress>
            </div>
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">50</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount - 4.9 > 1 ? 0.9 : precipAmount - 4.9}
                max=".9"
              ></progress>
            </div>
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">60</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount - 5.9 > 1 ? 0.9 : precipAmount - 5.9}
                max=".9"
              ></progress>
            </div>
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">70</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount - 6.9 > 1 ? 0.9 : precipAmount - 6.9}
                max=".9"
              ></progress>
            </div>
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">80</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount - 7.9 > 1 ? 0.9 : precipAmount - 7.9}
                max=".9"
              ></progress>
            </div>
            <div className="flex flex-col ">
              <span className="text-xs mb-[2px] text-slate-400">90</span>
              <progress
                className="progress progress-primary px-1"
                value={precipAmount - 8.9 > 1 ? 1 : precipAmount - 8.9}
                max="1"
              ></progress>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Precipitation;
