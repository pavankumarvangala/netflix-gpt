import React from "react";
import lang from "../utils/langConfig";
import { useSelector } from "react-redux";

const GptSearchBox = () => {
  const langKey = useSelector((store) => store.config.appLanguage);
  return (
    <div className="w-full flex justify-center">
      <form className="w-[600px] grid grid-cols-12 bg-black p-2">
        <input
          type="text"
          className="border border-blue-500 col-span-10 pl-3 rounded-md"
          placeholder={lang[langKey]?.GPTSearchplaceholder}
        />
        <button className="h-10 m-2 bg-red-500 rounded-md col-span-2">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBox;
