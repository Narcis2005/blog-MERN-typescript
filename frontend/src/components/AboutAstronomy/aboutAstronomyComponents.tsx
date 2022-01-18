import styled from "styled-components";
import { DarkGray } from "../../utils/colors";

export const AboutAstronomyContainer = styled.div`
    background: ${DarkGray};
    padding: 5rem 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    & > {
        flex-basis: 100%;
        
    }
    @media (max-width: 960px){
        flex-direction: column;
    }
`
export const TextContainer = styled.div`
width: 40%;
@media (max-width: 960px){
        width: 80%;
        text-align: center;
        padding-bottom: 5rem;
    }
`

export const SectionTitle = styled.h2`
    padding-bottom: 2rem;
    font-size: 3rem;
    @media (max-width: 960px) {
        font-size: 2rem;    
    }
`
export const AboutAstronomyText = styled.p`
`
export const IllustrationContainer = styled.div`
    width: 40%;
    @media (max-width: 960px){
        width: 60%;
    }
`

export const Illustration = styled.img`
    margin-left: 10%;
    width: 80%;
`