
import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        console.log("Signed in with Google successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => {
        console.log("Signed in with Github successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error signing in with Github:", error.message);
      });
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleGoogleSignIn}
        className="bg-white text-gray-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl transition duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <FaGoogle />
        <span>Sign In with Google</span>
      </button>
      <button
        onClick={handleGithubSignIn}
        className="bg-gray-800 text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <FaGithub />
        <span>Sign In with Github</span>
      </button>
    </div>
  );
};

export default SocialLogin;