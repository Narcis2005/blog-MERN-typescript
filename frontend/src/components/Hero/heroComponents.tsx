import styled from "styled-components";
import { MainButton } from "../MainButton";
export const HeroContainer = styled.div`
    background-image: url("/images/hero.jpg");
    width: 100%;
    position: relative;
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

`
export const MainTitle = styled.div`
    width: 80%;
    padding-bottom: 3rem;
   
`
export const Title = styled.h1`
    font-size: 3rem;
    @media (max-width: 960px) {
        font-size: 2rem;    
    }
`

export const SecondayText = styled.div`
    width: 80%;
`

export const HeroButton = styled(MainButton)`
    margin-top: 3rem;
    width: 200px;
    border-radius: 40px;
    font-weight: 700;
`