import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] pl-24 absolute bg-gradient-to-r from-black text-white">
      <h4 className="text-6xl font-bold">{title}</h4>
      <p className="w-1/4 my-6 text-lg">{overview}</p>
      <div>
        <button className="bg-gray-500 py-3 px-8 rounded-md text-white">
          ▶️ Play
        </button>
        <button className="mx-3 bg-gray-500 py-3 px-8 rounded-md text-white">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
