import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchVal = useSelector((store) => store.gpt.showGptSearch);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };
  const handleChangeLanguage = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/browse");

        // ...
      } else {
        dispatch(removeUser());
        Navigate("/");
        // User is signed out
        // ...
      }
      //unsubscribing when component unmounts
      return () => unsubscribe();
    });
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {gptSearchVal && (
            <select
              name="languages"
              className="px-3 py-2 mx-3 my-2 rounded-lg bg-gray-600 text-white"
              onChange={handleChangeLanguage}
            >
              {SUPPORTED_LANGUAGES.map((langu) => (
                <option key={langu.identifier} val={langu.identifier}>
                  {langu.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-violet-800 py-2 px-4 mx-4 my-2 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {gptSearchVal ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-lg hidden md:inline-block"
            alt="icon"
            src={user.photoURL}
          ></img>
          <button className="font-bold text-white px-2" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
