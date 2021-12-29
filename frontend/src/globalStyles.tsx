import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
        font-family: 'Montserrat', sans-serif;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 70%;
    max-width: 1400px;
    flex-wrap: wrap;
`
interface IMainText{
    color: string;
}
export const Text = styled.p``

export const MainText = styled.h1<IMainText>`
    color: ${({color}) => color };
    font-size: 3rem;
    padding: 0 10%;
    @media (max-width: 960px){
        font-size: 2.5rem;
    }
`