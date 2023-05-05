import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useContext } from "react";


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

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one number."
      );
      setIsRegistered(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        const createdUser = result.user;
        createdUser.photoURL = photo;
        createdUser.displayName = name;
        console.log(createdUser);
        updateUser(name, photo)
          .then(() => {
            console.log("User update");
          })
          .catch(console.log("this is not update"));
        setIsRegistered(true);
        setPasswordError("");
      })
      .catch((error) => {
        console.error(error);
        setIsRegistered(false);
        setPasswordError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full p-4 px-5 py-5">
            <div className="flex flex-col mb-6">
              <h2 className="text-center font-bold text-3xl uppercase mb-4">
                Register
              </h2>
              <p className="text-center text-base font-bold text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
            {passwordError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <p>{passwordError}</p>
              </div>
            )}

            {isRegistered && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p>Registration successful!</p>
              </div>
            )}

            <form onSubmit={handleRegister}>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900">
                  Name
                </label>
                <input
                  className="bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900">
                  Photo URL
                </label>
                <input
                  className="bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900">
                  Email address
                </label>
                <input
                  className="bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="bg-gray-100 border border-gray-400 py-2 px-3 rounded-lg pr-10"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
              </button>
              <br />
              <div className="text-gray-600 flex my-4 rounded-md p-3 shadow-md">
                <p className="text-gray-600 text-lg">
                  Already have an account?
                </p>
                <Link
                  to="/login"
                  className="text-blue-500 text-xl font-bold ms-4 underline">
                  Login
                </Link>
              </div>
              <p className="text-green-500"></p>
              <p className="text-red-500"></p>
            </form>
            <div className="my-8 flex justify-center">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;