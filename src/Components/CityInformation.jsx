import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";

const CityInformation = ({ isLoading, data, searchError }) => {
  const { location, forecast, current } = data || [];
  const sunrise = forecast?.forecastday[0]?.astro?.sunrise?.split(" ")[0];
  const sunset = forecast?.forecastday[0]?.astro?.sunset?.split(" ")[0];
  const [currentMonth, setCurrentMonth] = useState("");
  const allMonth = [
    "empty",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // get the current month in writing formate
  if (location?.localtime && !currentMonth) {
    const localDate = location?.localtime?.split(" ")[0];
    const monthIndx = parseInt(localDate.split("-")[1]);
    const currentDate = localDate.split("-")[2];
    const month = allMonth[monthIndx];
    setCurrentMonth(`${currentDate} ${month}`);
  }
  return (
    <div className="mt-14 text-white lg:mt-16 flex items-center justify-between">
      {!!isLoading ? (
        <span className="loading loading-dots mx-auto py-20 md:py-0"></span>
      ) : !!searchError ? (
        <span className="text-red-500 text-2xl">{searchError}</span>
      ) : (
        <>
          <div className="">
            <h1 className="text-[1.3rem] mb-1 font-semibold flex items-center gap-2">
              <FaLocationArrow className="text-slate-300 text-sm"></FaLocationArrow>
              {location?.name}, {location?.country}
            </h1>
            <h4 className="text-lg font-semibold">Today {currentMonth}</h4>
          </div>
          <div className="font-semibold">
            <p className="flex items-center gap-2 mb-2">
              <FiSunrise className="font-bold text-slate-50"></FiSunrise>
              {sunrise}
            </p>
            <p className="flex items-center gap-2">
              <FiSunset className="font-bold text-slate-50"></FiSunset>
              {sunset}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CityInformation;
