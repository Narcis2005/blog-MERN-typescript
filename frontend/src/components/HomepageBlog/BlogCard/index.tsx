import React from "react";
import { Link } from "react-router-dom";
import { postInterface } from "../../../redux/types/post";
import {
    ButtonCard,
    CardContainer,
    Description,
    DescriptionContainer,
    Img,
    ImgContainer,
    TextContainer,
    Title,
    TitleContainer,
} from "./BlogCardComponents";

const BlogCard: React.FC<postInterface> = ({ imageURL, title, description }) => {
    return (
        <CardContainer>
            <ImgContainer>
                <Img src={imageURL} />
            </ImgContainer>
            <TextContainer>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                <DescriptionContainer>
                    <Description>{description}</Description>
                </DescriptionContainer>
            </TextContainer>
            <Link to={`/blog/${title.replaceAll(" ", "-").toLowerCase()}`}>
                <ButtonCard>Read More</ButtonCard>
            </Link>
        </CardContainer>
    );
};

export default BlogCard;
