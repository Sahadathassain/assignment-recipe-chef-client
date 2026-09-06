import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {
    signInWithGoogle,
    signInWithGithub,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  const handleSocialLogin = (loginMethod) => {
    setError("");

    loginMethod()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to sign in. Please try again.");
      });
  };

  return (
    <div className="w-full">
      {/* Error */}
      {error && (
        <div
          className="mb-4 rounded-xl border border-[#C2412D]/20 bg-[#C2412D]/5 px-4 py-3 text-center text-sm text-[#C2412D]"
          role="alert"
        >
          {error}
        </div>
      )}

      {/* Google */}
      <button
        type="button"
        onClick={() => handleSocialLogin(signInWithGoogle)}
        className="mb-3 flex w-full items-center justify-center gap-3 rounded-xl border border-[#14532D]/15 bg-white px-5 py-3.5 text-sm font-semibold text-[#17201A] transition-all duration-200 hover:border-[#14532D]/30 hover:bg-[#F5F7F2] hover:shadow-sm"
      >
        <FaGoogle className="text-[#C2412D]" />
        <span>Continue with Google</span>
      </button>

      {/* GitHub */}
      <button
        type="button"
        onClick={() => handleSocialLogin(signInWithGithub)}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#17201A] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#14532D] hover:shadow-md"
      >
        <FaGithub />
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
};

export default SocialLogin;