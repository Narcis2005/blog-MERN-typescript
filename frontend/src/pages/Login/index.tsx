import React from "react";
import { Helmet } from "react-helmet-async";
import LoginComponent from "../../components/LoginComponent";

const Login: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Login to a comunity of people that are passionate about astronomy" />
                <meta property="og:title" content="Login - Astronomy blog" />
                <meta property="og:url" content="http://blog.chirilovnarcis.ro/login" />
                <meta property="og:image" content="https://blog.chirilovnarcis.ro/hero.webp" />
                <meta
                    property="og:description"
                    content="Login to a comunity of people that are passionate about astronomy"
                />
                <title>Login - Astronomy blog</title>
            </Helmet>
            <LoginComponent />
        </>
    );
};

export default Login;
