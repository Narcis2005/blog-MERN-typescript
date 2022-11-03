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
                    &quot;Man must rise above the Earth, to the top of the atmosphere and beyond, for only thus will he fully understand the world in which he lives.&quot; <br/> - Socrates
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
