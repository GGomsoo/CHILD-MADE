import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const [isLogin, setIsLogin] = useState(
        !!localStorage.getItem("accessToken")
    );

    useEffect(() => {
        const checkLoginStatus = () => {
            const accessToken = localStorage.getItem("accessToken");
            setIsLogin(!!accessToken);
        };

        checkLoginStatus();
    }, []);

    console.log(isLogin);

    return isLogin ? <Outlet /> : <Navigate to="/loginerrorpage" />;
};

export default PrivateRoute;
