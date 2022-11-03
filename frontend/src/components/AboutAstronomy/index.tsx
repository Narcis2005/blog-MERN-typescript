import {
    AboutAstronomyContainer,
    AboutAstronomyText,
    Illustration,
    IllustrationContainer,
    SectionTitle,
    TextContainer,
} from "./aboutAstronomyComponents";
import React from "react";

const AboutAstronomy = () => {
    return (
        <>
            <AboutAstronomyContainer>
                <TextContainer>
                    <SectionTitle>What is Astronomy?</SectionTitle>
                    <AboutAstronomyText>
                    Astronomy is the science that encompasses the study of all extraterrestrial objects and phenomena. It uses mathematics, physics, and chemistry in order to explain their origin and evolution.
                    </AboutAstronomyText>
                </TextContainer>
                <IllustrationContainer>
                    <Illustration
                        src="images/what-is-astronomy-illustration.svg"
                        alt="rocket illustration"
                        width="450"
                        height="450"
                    />
                </IllustrationContainer>
            </AboutAstronomyContainer>
        </>
    );
};

export default AboutAstronomy;
