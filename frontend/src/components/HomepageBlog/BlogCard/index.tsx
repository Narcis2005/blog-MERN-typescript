import React from "react";
import { Link } from "react-router-dom";
import { shortPostInterface } from "../../../redux/types/post";
import {
    ButtonCard,
    ButtonContainer,
    CardContainer,
    Description,
    DescriptionContainer,
    Img,
    ImgContainer,
    TextContainer,
    Title,
    TitleContainer,
} from "./BlogCardComponents";

const BlogCard: React.FC<shortPostInterface> = ({ imageURL, title, description, slug }) => {
    return (
        <CardContainer>
            <ImgContainer>
                <Link to={`/blog/post/${slug}`}>
                    <Img src={imageURL} alt={`Image for ${title} post`} width="360" height="200" />
                </Link>
            </ImgContainer>

            <TextContainer>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                <DescriptionContainer>
                    <Description>{description}</Description>
                </DescriptionContainer>
            </TextContainer>
            <ButtonContainer>
            <Link to={`/blog/post/${slug}`}>
                <ButtonCard>Continue reading</ButtonCard>
            </Link>
            </ButtonContainer>
        </CardContainer>
    );
};

export default BlogCard;
