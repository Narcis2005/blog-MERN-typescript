import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../../globalStyles";
import { HeroContainer, MainTitle, Title, SecondayText, HeroButton } from "./heroComponents";
const Hero: React.FC = () => {
    return (
        <>
            <HeroContainer>
                <MainTitle>
                    <Title>Astronomy and her ways</Title>
                </MainTitle>
                <SecondayText>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cupiditate saepe similique mollitia
                        magnam qui.
                    </Text>
                </SecondayText>
                <Link to="/blog">
                    <HeroButton>Blog</HeroButton>
                </Link>
            </HeroContainer>
        </>
    );
};

export default Hero;
