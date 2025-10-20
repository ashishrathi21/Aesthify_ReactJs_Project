import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = ({ index, setIndex }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <button
        onClick={() => index > 1 && setIndex(index - 1)}
        className="bg-red-500 px-6 py-2 text-white rounded-md flex items-center gap-1"
      >
        <GrFormPrevious />
      </button>
      <span className="text-black font-bold text-lg">{index}</span>
      <button
        onClick={() => setIndex(index + 1)}
        className="bg-red-500 px-6 py-2 text-white rounded-md flex items-center gap-1"
      >
        <GrFormNext />
      </button>
    </div>
  );
};

export default Pagination;
