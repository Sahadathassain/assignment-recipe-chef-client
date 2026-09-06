import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        console.log(loggedUser);

        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Incorrect email or password.");
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((previous) => !previous);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#F5F7F2] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left Visual */}
        <div className="relative hidden min-h-[650px] overflow-hidden bg-[#14532D] lg:block">
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85"
            alt="Cooking"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#17201A]/65" />

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur-sm" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Bangladesh Chef
                </span>
              </div>
            </div>

            <div>
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                Welcome to our kitchen
              </span>

              <h1 className="max-w-md text-5xl font-bold leading-tight tracking-tight text-white">
                Good food brings people together.
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-white/75">
                Sign in to explore chefs, discover recipes, and find
                inspiration for your next meal.
              </p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">

            {/* Header */}
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C2412D]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#14532D]">
                  Account
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#17201A] sm:text-4xl">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#17201A]/55">
                Sign in to continue your culinary journey.
              </p>
            </div>

            {/* Error */}
            {errorMessage && (
              <div
                className="mb-6 rounded-xl border border-[#C2412D]/20 bg-[#C2412D]/5 px-4 py-3 text-sm text-[#C2412D]"
                role="alert"
              >
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#17201A]"
                >
                  Email
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
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-[#14532D]/15 bg-[#F5F7F2] py-3.5 pl-11 pr-12 text-sm text-[#17201A] outline-none transition-all placeholder:text-[#17201A]/35 focus:border-[#14532D] focus:bg-white focus:ring-4 focus:ring-[#14532D]/5"
                  />

                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    aria-label={
                      passwordVisible
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#17201A]/45 transition-colors hover:text-[#14532D]"
                  >
                    {passwordVisible ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#14532D] px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#0f4225] hover:shadow-lg"
              >
                <span>Sign In</span>

                <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>

            {/* Register */}
            <p className="mt-6 text-center text-sm text-[#17201A]/55">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-[#C2412D] transition-colors hover:text-[#14532D]"
              >
                Create an account
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

export default Login;