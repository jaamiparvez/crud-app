import {Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let auth = {'isLoggedIn': localStorage.getItem("isLoggedIn")}
  return(auth.isLoggedIn === "true" ? 
    <Outlet/> : <Navigate to="/login"/>
    )
};

export default ProtectedRoute;
