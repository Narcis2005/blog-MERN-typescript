import { postInterface } from "../../redux/types/post";
import {
    Author,
    Tag,
    BlogPostComponentContainer,
    Category,
    Content,
    ContentContainer,
    ImageContainer,
    Img,
    Tags,
    TextContainer,
    Title,
    TitleContainer,
    Information,
    CategoryContainer,
    CategoryText,
    TagsText,
} from "./BlogPostComponents";
import React from "react";

const BlogPostComponent: React.FC<postInterface> = ({ imageURL, title, description }) => {
    return (
        <BlogPostComponentContainer>
            <ImageContainer>
                <Img src={imageURL} />
            </ImageContainer>
            <TextContainer>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                <Information>
                    <Author>Written by Narcis</Author>
                    <CategoryContainer>
                        <CategoryText>Category: </CategoryText>
                        <Category to="/home">Nature</Category>
                    </CategoryContainer>
                    <Tags>
                        <TagsText>Tags: </TagsText>
                        <Tag to="/home">Sky</Tag>
                        <Tag to="/home">Night</Tag>
                    </Tags>
                </Information>
                <ContentContainer>
                    <Content>{description}</Content>
                </ContentContainer>
            </TextContainer>
        </BlogPostComponentContainer>
    );
};

export default BlogPostComponent;
