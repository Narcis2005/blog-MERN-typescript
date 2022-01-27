import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../index";
import React from "react";
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector((state: RootState) => state.auth);
    if (auth.status === "failed") {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;
