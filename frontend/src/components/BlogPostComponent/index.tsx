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
    DateText,
} from "./BlogPostComponents";
import React from "react";

const BlogPostComponent: React.FC<postInterface> = ({ imageURL, title, content, tags, category, createdBy, createdAt }) => {
    console.log(typeof new Date(createdAt));
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
                        <Category to={`/blog/category/${category}`}>{category}</Category>
                    </CategoryContainer>
                    <Tags>
                        <TagsText>Tags: </TagsText>
                        {tags.map((tag: string, key: number) => (
                            <Tag to={`/blog/tag/${tag}`} key={key}>
                                {tag}
                            </Tag>
                        ))}
                    </Tags>
                    <DateText>
                        {new Date(createdAt).toUTCString()}
                    </DateText>
                </Information>
                <ContentContainer>
                    <Content>{content}</Content>
                </ContentContainer>
            </TextContainer>
        </BlogPostComponentContainer>
    );
};

export default BlogPostComponent;
