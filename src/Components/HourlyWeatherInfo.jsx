import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HourlyWeatherInfo = ({ forecast, isLoading, location }) => {
  const hours = forecast?.forecastday[0]?.hour;
  const currentHour =
    (location?.localtime &&
      location?.localtime?.split(" ")[1]?.split(":")[0]) ||
    0;
  const hoursData = [];
  if (currentHour) {
    for (let i = currentHour; i <= 23; i++) {
      hoursData.push({
        temperature: parseInt(hours[i].temp_c),
        icon: hours[i].condition?.icon,
        rainPossibility: hours[i].chance_of_rain,
      });
    }
  }
  return (
    <div className="w-full flex flex-col justify-between px-3 md:px-6 py-4 mt-10 overflow-x-auto h-72 lg:rounded-[2.5rem] rounded-2xl md:rounded-2xl bg-slate-50">
      <div className="flex mb-2 items-center justify-between gap-4">
        <p className="mr-auto">Upcoming hours</p>
        <p className="px-2 bg-blue-100 rounded-lg cursor-pointer flex items-center py-1 gap-1 text-xs">
          Rain precipitation <FaChevronDown></FaChevronDown>
        </p>
        <p className="px-2  bg-blue-100 rounded-lg flex cursor-pointer items-center py-1 gap-1 text-xs">
          Next days <FaChevronRight></FaChevronRight>
        </p>
      </div>
      <div className="flex items-center justify-between px-2">
        {hoursData.map((el, index) => (
          <div className="flex flex-col items-center text-xs gap-1" key={index}>
            <p>{index === 0 ? "Now" : `${parseInt(currentHour) + index}:00`}</p>
            <img className="w-8 h-8" src={el.icon} alt="" />
            <p>{el.temperature}°</p>
          </div>
        ))}
      </div>
      {hoursData.length > 0 && (
        <ResponsiveContainer className="" width="100%" height="50%">
          <AreaChart
            data={hoursData}
            margin={{
              top: 10,
              right: 15,
              left: 15,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#000000"
              strokeWidth={0.5}
              horizontal={false}
            />
            <XAxis dataKey="rainPossibility" interval={0} />
            <YAxis hide domain={[0, 100]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="rainPossibility"
              stroke="#0775f0"
              fill="#0775f0"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default HourlyWeatherInfo;
