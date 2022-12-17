import React from "react";
import { Route, Navigate } from "react-router-dom";

interface ProtectedRouteProps{
  user:any,
  children:any
}

const ProtectedRoute = ({ user,children }:ProtectedRouteProps) => {
  if(!user){
    return <Navigate to="/login" replace />
  }
  return children
};

export default ProtectedRoute;
