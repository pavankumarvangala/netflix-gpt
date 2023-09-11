import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { languageList } from "../utils/languageConstants";
import { changeAppLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGptSearch = useSelector((store) => store.gpt.isGptSearch);
  const selectedLang = useSelector((store) => store.config.appLanguage);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsuscribe();
    };
  }, []);
  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };
  const handleLangChange = (e) => {
    console.log(e.target.value);
    dispatch(changeAppLanguage(e.target.value));
  };
  return (
    <div className="w-full pl-4 pt-4 absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" alt="logo" src={LOGO} />
      {user && (
        <div className="flex items-center">
          {isGptSearch && (
            <select onChange={handleLangChange}>
              {languageList.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  selected={selectedLang === lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 m-2 bg-blue-500 rounded-md text-white"
            onClick={handleGptSearch}
          >
            {isGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="h-12 w-12" alt="usericon" src={user?.photoURL} />

          <button className="text-white font-bold mx-2" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
