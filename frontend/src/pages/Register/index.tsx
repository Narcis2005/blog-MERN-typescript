import RegisterComponent from "../../components/RegisterComponent";
import React from "react";
import { Helmet } from "react-helmet-async";
const Register = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Register for a comunity of people that are passionate about astronomy"
                />
                <meta property="og:title" content="Register - Astronomy blog" />
                <meta property="og:url" content="http://blog.chirilovnarcis.ro/register" />
                <meta property="og:image" content="https://blog.chirilovnarcis.ro/hero.webp" />
                <meta
                    property="og:description"
                    content="Register for a comunity of people that are passionate about astronomy"
                />
                <title>Register - Astronomy blog</title>
            </Helmet>
            <RegisterComponent />
        </>
    );
};

export default Register;
