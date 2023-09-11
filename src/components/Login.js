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
import { BG_URL, USER_AVATAR } from "../utils/constants";

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
            photoURL: USER_AVATAR,
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
        <img src={BG_URL} alt="logo" />
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
