import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="spinner"
          style={{
            width: "50px",
            height: "50px",
            border: "4px solid",
            borderTopColor: "#f44336",
            borderRightColor: "#e91e63",
            borderBottomColor: "#9c27b0",
            borderLeftColor: "#03a9f4",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}></div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;