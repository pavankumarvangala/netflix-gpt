export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTNlYjNlNGEwNDFiNTRjZmRmY2Q0ZTQ3NWFlYjk0NSIsInN1YiI6IjY0ZWYzMTQ0NzdkMjNiMDE1MDM4OTAxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.91MlR29fcAcInwiIO6Z-JidaIJuU_4wjyGFrVnyRFZI",
  },
};

export const NOW_PLAYING_MOVIES =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

// export const OPEN_AI_KEY =
//   "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";

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;
