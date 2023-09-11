import React from "react";

const GptSearchBox = () => {
  return (
    <div className="w-full flex justify-center">
      <form className="w-[600px] grid grid-cols-12 bg-black p-2">
        <input
          type="text"
          className="border border-blue-500 col-span-10 pl-3 rounded-md"
          placeholder="how can I assist you"
        />
        <button className="h-10 m-2 bg-red-500 rounded-md col-span-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBox;
