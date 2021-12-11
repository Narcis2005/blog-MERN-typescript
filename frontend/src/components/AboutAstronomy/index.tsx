import { Container } from "../../globalStyles";
import { AboutAstronomyContainer, AboutAstronomyText, Illustration, IllustrationContainer, SectionTitle, TextContainer } from "./aboutAstronomyComponents";

const AboutAstronomy = () => {
    return (
        <>
            <AboutAstronomyContainer>
                    <TextContainer>
                        <SectionTitle>What is Astronomy?</SectionTitle>
                        <AboutAstronomyText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste commodi hic debitis tempore est soluta numquam dignissimos, laudantium ipsum.</AboutAstronomyText>
                    </TextContainer>
                    <IllustrationContainer>
                        <Illustration src="images/what-is-astronomy-illustration.svg"/>
                    </IllustrationContainer>
            </AboutAstronomyContainer>
        </>
    )
}

export default AboutAstronomy;