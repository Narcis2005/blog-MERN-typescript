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

export const Text = styled.p``