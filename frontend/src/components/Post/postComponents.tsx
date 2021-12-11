import styled from "styled-components";
import { MainButton } from "../MainButton";

export const PostContainer = styled.div`
    display: flex;
    width: 80%;
    max-height: 400px;
    justify-content: space-between;
    padding: 3em;
    margin: 3em 0;
    box-shadow: rgb(0 0 0 / 50%) 0px 10px 20px;

    @media (max-width: 960px){
        flex-direction: column;
        max-height: 600px;
        align-items: center;
        padding: 3em 1em;

    }
`
export const ImgContainer = styled.div`
    width: 30%;
    height: 250px;
    @media (max-width: 960px){
        width: 100%
    }

`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const TextContainer = styled.div`
    width: 60%;
    text-align: center;
    justify-content: center;
    @media (max-width: 960px){
        width: 100%;
    }

`
export const TitleContainer = styled.div`
    padding: 30px 0;
`
export const Title = styled.h2`
    font-size: 2rem;
`
export const DescriptionContainer = styled.div``
export const Description = styled.p``
export const Button = styled(MainButton)`
    margin-top: 30px;
`