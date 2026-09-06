import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiEye,
  FiEyeOff,
  FiUser,
  FiMail,
  FiImage,
  FiLock,
  FiArrowRight,
} from "react-icons/fi";

import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one number."
      );
      setIsRegistered(false);
      return;
    }

    setPasswordError("");
    setIsRegistered(false);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        return updateUser(name, photo);
      })
      .then(() => {
        setIsRegistered(true);
        setPasswordError("");

        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setIsRegistered(false);
        setPasswordError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((previous) => !previous);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#F5F7F2] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left Visual */}
        <div className="relative hidden min-h-[720px] overflow-hidden bg-[#14532D] lg:block">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85"
            alt="Cooking ingredients"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#17201A]/65" />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">

            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <span className="text-sm font-bold text-white">
                  BC
                </span>
              </div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Bangladesh Chef
              </span>
            </div>

            {/* Message */}
            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                Join the community
              </span>

              <h1 className="max-w-md text-5xl font-bold leading-tight tracking-tight text-white">
                Create your place at the table.
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-white/75">
                Join Bangladesh Chef and discover talented chefs, inspiring
                recipes, and new ideas for your kitchen.
              </p>
            </div>
          </div>
        </div>

        {/* Register Form */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">

            {/* Header */}
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C2412D]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#14532D]">
                  Create Account
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl">
                Join Bangladesh Chef
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#17201A]/55">
                Create an account and start exploring.
              </p>
            </div>

            {/* Error */}
            {passwordError && (
              <div
                className="mb-6 rounded-xl border border-[#C2412D]/20 bg-[#C2412D]/5 px-4 py-3 text-sm leading-6 text-[#C2412D]"
                role="alert"
              >
                {passwordError}
              </div>
            )}

            {/* Success */}
            {isRegistered && (
              <div
                className="mb-6 rounded-xl border border-[#14532D]/20 bg-[#14532D]/5 px-4 py-3 text-sm text-[#14532D]"
                role="status"
              >
                Registration successful!
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleRegister}>

              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#17201A]"
                >
                  Name
                </label>

                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#14532D]/50" />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-[#14532D]/15 bg-[#F5F7F2] py-3.5 pl-11 pr-4 text-sm text-[#17201A] outline-none transition-all placeholder:text-[#17201A]/35 focus:border-[#14532D] focus:bg-white focus:ring-4 focus:ring-[#14532D]/5"
                  />
                </div>
              </div>

              {/* Photo */}
              <div className="mb-5">
                <label
                  htmlFor="photo"
                  className="mb-2 block text-sm font-semibold text-[#17201A]"
                >
                  Photo URL
                </label>

                <div className="relative">
                  <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-[#14532D]/50" />

                  <input
                    id="photo"
                    type="url"
                    name="photo"
                    placeholder="https://example.com/photo.jpg"
                    required
                    className="w-full rounded-xl border border-[#14532D]/15 bg-[#F5F7F2] py-3.5 pl-11 pr-4 text-sm text-[#17201A] outline-none transition-all placeholder:text-[#17201A]/35 focus:border-[#14532D] focus:bg-white focus:ring-4 focus:ring-[#14532D]/5"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#17201A]"
                >
                  Email address
                </label>

                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#14532D]/50" />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-[#14532D]/15 bg-[#F5F7F2] py-3.5 pl-11 pr-4 text-sm text-[#17201A] outline-none transition-all placeholder:text-[#17201A]/35 focus:border-[#14532D] focus:bg-white focus:ring-4 focus:ring-[#14532D]/5"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#17201A]"
                >
                  Password
                </label>

                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#14532D]/50" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    required
                    className="w-full rounded-xl border border-[#14532D]/15 bg-[#F5F7F2] py-3.5 pl-11 pr-12 text-sm text-[#17201A] outline-none transition-all placeholder:text-[#17201A]/35 focus:border-[#14532D] focus:bg-white focus:ring-4 focus:ring-[#14532D]/5"
                  />

                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#17201A]/45 transition-colors hover:text-[#14532D]"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>

                <p className="mt-2 text-xs leading-5 text-[#17201A]/45">
                  Minimum 6 characters with uppercase, lowercase, and a number.
                </p>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#14532D] px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#0f4225] hover:shadow-lg"
              >
                <span>Create Account</span>

                <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-[#17201A]/55">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-[#C2412D] transition-colors hover:text-[#14532D]"
              >
                Sign in
              </Link>
            </p>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#14532D]/10" />

              <span className="text-xs font-medium uppercase tracking-wider text-[#17201A]/35">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-[#14532D]/10" />
            </div>

            {/* Social Login */}
            <div className="flex justify-center">
              <SocialLogin />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;