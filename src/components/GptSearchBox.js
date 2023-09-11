import React, { useRef } from "react";
import lang from "../utils/langConfig";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResults } from "../utils/gptSlice";

const GptSearchBox = () => {
  const langKey = useSelector((store) => store.config.appLanguage);
  const dispatch = useDispatch();
  const searchText = useRef();
  const serachMoviesList = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie recommendaion system and suggest some movie for query " +
      searchText.current.value +
      "Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: happy, gabbar singh, aadi, kushi";
    const searchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const movieResultList =
      searchResults.choices?.[0]?.message?.content.split(",");
    const moviesList = movieResultList.map((movie) => serachMoviesList(movie));
    const movieData = await Promise.all(moviesList);
    dispatch(
      addMovieResults({ movieNames: movieResultList, movieResults: movieData })
    );
  };
  return (
    <div className="w-full flex justify-center">
      <form
        className="w-[600px] grid grid-cols-12 bg-black p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="border border-blue-500 col-span-10 pl-3 rounded-md"
          placeholder={lang[langKey]?.GPTSearchplaceholder}
        />
        <button
          className="h-10 m-2 bg-red-500 rounded-md col-span-2"
          onClick={handleGptSearch}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBox;
