import React from "react";
import Hero from "../../components/Hero";
import AboutAstronomy from "../../components/AboutAstronomy";
import HomepageBlog from "../../components/HomepageBlog";
import { Helmet } from "react-helmet-async";

const Homepage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="This is a blog about astronomy. Here you will find articles about different concepts."
                />
                <meta property="og:title" content="Home - Astronomy blog" />
                <meta property="og:url" content="http://blog.chirilovnarcis.ro" />
                <meta property="og:image" content="https://blog.chirilovnarcis.ro/hero.webp" />
                <meta
                    property="og:description"
                    content="This is a blog about astronomy. Here you will find articles about different concepts."
                />
                <title>Home - Astronomy blog</title>
            </Helmet>
            <Hero />
            <AboutAstronomy />
            <HomepageBlog />
        </>
    );
};

export default Homepage;
