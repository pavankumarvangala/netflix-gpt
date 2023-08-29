import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    console.log(email.current.value, password.current.value);
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSingIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/45650416?u=9d5918ef909a497b11c3d0fdbba396ee8d996018&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const handleSingin = () => {
    setIsSignIn(!isSingIn);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col p-12 absolute my-36 mx-auto right-0 left-0 bg-black w-3/12 text-white rounded-lg bg-opacity-70"
      >
        <h4 className="text-2xl font-bold p-2">
          {isSingIn ? "Sign In" : "Sign Up"}{" "}
        </h4>
        {!isSingIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full my-5 bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-2 m-2 w-full my-5 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full my-5 bg-gray-700"
        />
        <p className="text-red-500 text-lg">{errorMessage}</p>
        <button
          className="p-2 m-2 my-7 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSingIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 text-sm cursor-pointer" onClick={handleSingin}>
          {isSingIn
            ? "New to Netflix? Sign Up now"
            : "Already registered Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
