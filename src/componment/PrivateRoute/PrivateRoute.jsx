import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F7F2]">
        <div className="flex flex-col items-center">

          {/* Spinner */}
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full border-4 border-[#14532D]/10" />

            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#14532D]" />
          </div>

          <p className="mt-5 text-sm font-medium text-[#17201A]/50">
            Preparing your kitchen...
          </p>
        </div>
      </div>
    );
  }

  // Authenticated user
  if (user) {
    return children;
  }

  // Not authenticated
  return (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;