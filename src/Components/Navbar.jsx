import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const Navbar = ({ defaultStyle, titleStyle }) => {
  const [visited, setVisited] = useState(false);
  useEffect(() => {
    const storedData = localStorage.getItem("date") || "";
    if (storedData) {
      const lastVisitedTime =
        new Date(storedData).getMonth + "" + new Date(storedData).getDate();
      const currentTime = new Date().getMonth + "" + new Date().getDate();
      const timeDifference = parseInt(currentTime) - parseInt(lastVisitedTime);
      if (timeDifference > 0) {
        setVisited(true);
      }
    } else {
      localStorage.setItem("date", new Date());
    }
  }, []);

  const alreadyVisited = localStorage.getItem("visited") || false;

  return (
    <div className={`${defaultStyle} items-center justify-between`}>
      <div>
        <h1 className={`${titleStyle} mb-1 font-semibold`}>
          Welcome {visited && "back Isabella"}!
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
