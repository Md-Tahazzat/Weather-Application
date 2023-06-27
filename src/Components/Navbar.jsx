import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Navbar = ({ defaultStyle, titleStyle }) => {
  return (
    <div className={`${defaultStyle} items-center justify-between`}>
      <div>
        <h1 className={`${titleStyle} mb-1 font-semibold`}>
          Welcome back Isabella!
        </h1>
        <h4 className="text-lg">Check out today's weather information</h4>
      </div>

      {/* TODO: login info based in firebase login */}
      <div className="flex items-center md:gap-4 flex-col-reverse md:flex-row">
        <label className="font-bold text-2xl" htmlFor="">
          <BsThreeDots></BsThreeDots>
        </label>
        <label className="font-bold">Login</label>
      </div>
    </div>
  );
};

export default Navbar;
