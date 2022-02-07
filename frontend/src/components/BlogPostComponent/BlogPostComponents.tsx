import { Link } from "react-router-dom";
import styled from "styled-components";
import { DarkGray } from "../../utils/colors";

export const BlogPostComponentContainer = styled.div`
    width: 100%;
    background: ${DarkGray};
    padding: 2em 0;
    padding-top: 0;
`;

export const ImageContainer = styled.div`
    height: 400px;
`;

export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
`;
export const TextContainer = styled.div``;
export const TitleContainer = styled.div`
    text-align: center;
    padding: 80px 0 10px 0;
`;

export const Title = styled.h1`
    font-size: 3rem;
    @media (max-width: 960px) {
        font-size: 2.5rem;
    }
`;

export const ContentContainer = styled.div`
    padding: 60px;
    line-height: 1.8rem;
`;

export const Content = styled.p`
    font-size: 18px;
`;
export const Information = styled.div`
    display: flex;
    margin-top: 1em;
    justify-content: flex-end;
    margin-right: 10%;
    gap: 20px;
    flex-wrap: wrap;
    @media (max-width: 960px) {
        justify-content: center;
        margin-right: 0;
    }
`;
export const Author = styled.p``;
export const Category = styled(Link)``;
export const Tags = styled.div`
    display: flex;
    gap: 10px;
`;
export const Tag = styled(Link)``;

export const CategoryContainer = styled.div`
    display: flex;
    gap: 10px;
`;
export const CategoryText = styled.p``;

export const TagsText = styled.p``;

export const DateText = styled.p``;

export const CommentsContainer = styled.div`
    width: 100%;
    padding: 10em 0 5em 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width: 960px) {
        padding: 5em 0 2.5em 0;
    }
    /* I think i could have done this also with flex-wrap  */
`;
