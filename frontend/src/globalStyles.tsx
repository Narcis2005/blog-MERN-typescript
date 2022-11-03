import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-Regular.woff2") format('woff2');
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat-Bold.woff2") format('woff2');
        font-weight: 700;
        font-display: swap;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: rgb(230, 230, 230);
        font-family: 'Montserrat';
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 70%;
    max-width: 1400px;
    flex-wrap: wrap;
`;
interface IMainText {
    color: string;
}
export const Text = styled.p``;

export const MainText = styled.h1<IMainText>`
    color: ${({ color }) => color};
    font-size: 3rem;
    padding: 0 10%;
    @media (max-width: 960px) {
        font-size: 2.5rem;
    }
`;
