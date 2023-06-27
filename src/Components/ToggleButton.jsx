import React from "react";
import { BsSearch } from "react-icons/bs";

const ToggleButton = ({ handleSearch }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <a
        href="#"
        className="btn btn-square btn-sm hover:bg-slate-50 bg-slate-100 border-none rounded-md font-bold text-xl text-blue-500"
      >
        +
      </a>
      <form onSubmit={handleSearch} className="input-group w-3/6">
        <input
          name="searchInput"
          type="text"
          placeholder="City name"
          className="px-2 bg-slate-50 w-full focus:outline-none"
        />
        <button
          type="submit"
          className="btn-sm px-2 bg-slate-800 text-slate-50 hover:bg-slate-900"
        >
          <BsSearch></BsSearch>
        </button>
      </form>
      <div className="flex items-center gap-1 text-slate-50">
        °C
        <input
          type="checkbox"
          className="toggle-sm toggle border-none bg-slate-50 "
        />
        °F
      </div>
    </div>
  );
};

export default ToggleButton;
