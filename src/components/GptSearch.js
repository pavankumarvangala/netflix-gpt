import React from "react";
import GptSearchBox from "./GptSearchBox";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <div className="pt-[10%]">
        <GptSearchBox />
      </div>
    </div>
  );
};

export default GptSearch;
