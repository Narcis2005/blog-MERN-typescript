import React from "react";
import Hero from "../../components/Hero"
import AboutAstronomy from "../../components/AboutAstronomy"
import HomepageBlog from "../../components/HomepageBlog";

const Homepage:React.FC = () => {
    return (
        <>
            <Hero />
            <AboutAstronomy />
            <HomepageBlog />
        </>
    )
}

export default Homepage;