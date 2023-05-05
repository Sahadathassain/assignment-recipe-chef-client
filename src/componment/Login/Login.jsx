import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
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
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login From</h2>
        {errorMessage && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
            role="alert">
            <p>{errorMessage}</p>
          </div>
        )}
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute top-0 right-0 mt-3 mr-4 cursor-pointer">
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-gray-600 my-4 rounded-md p-3 shadow-md">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-500 text-xl font-bold ms-4 underline">
            Register
          </Link>
        </p>
        <div className="my-8 flex justify-center">
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;