import styled from "styled-components";
import { DarkGray } from "../../utils/colors";

export const BlogPostComponentContainer = styled.div`
    width: 100%;
    background: ${DarkGray};
    padding: 2em 0;
    padding-top: 0;
`

export const ImageContainer = styled.div`
    height: 400px;
`

export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
`

export const TitleContainer = styled.div`
    text-align: center;
    padding: 80px 0 10px 0;
`

export const Title = styled.h1`
    font-size: 3rem;
    @media (max-width: 960px){
        font-size: 2.5rem;
    }

`

export const ContentContainer = styled.div`
    padding: 60px;
    line-height: 1.8rem;

`

export const Content = styled.p`
    font-size: 18px;
`