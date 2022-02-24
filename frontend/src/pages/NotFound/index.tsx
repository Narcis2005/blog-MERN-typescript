import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";
import React from "react";
import { lightRed } from "../../utils/colors";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Page not found on blog." />
                <meta property="og:title" content="Not found" />
                <meta property="og:image" content="https://blog.chirilovnarcis.ro/hero.webp" />
                <meta property="og:description" content="Page not found on blog." />
                <title>Not found</title>
            </Helmet>
            <DarkBackground>
                <MainText color={lightRed}>This page does not exist. Error 404.</MainText>
            </DarkBackground>
        </>
    );
};

export default NotFound;
