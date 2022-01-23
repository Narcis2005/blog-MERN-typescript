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

const BlogPostComponent: React.FC<postInterface> = ({ imageURL, title, content, tags, category, createdBy }) => {
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
                    <Author>Written by {createdBy.username}</Author>
                    <CategoryContainer>
                        <CategoryText>Category: </CategoryText>
                        <Category to={`/posts-by-category?category=${category}`}>{category}</Category>
                    </CategoryContainer>
                    <Tags>
                        <TagsText>Tags: </TagsText>
                        {tags.map((tag: string, key: number) => (
                            <Tag to={`/posts-by-tag?tag=${tag}`} key={key}>
                                {tag}
                            </Tag>
                        ))}
                    </Tags>
                </Information>
                <ContentContainer>
                    <Content>{content}</Content>
                </ContentContainer>
            </TextContainer>
        </BlogPostComponentContainer>
    );
};

export default BlogPostComponent;
