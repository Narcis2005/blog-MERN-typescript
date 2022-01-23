import React from "react";
import { Link } from "react-router-dom";
import { shortPostInterface } from "../../redux/types/post";
import {
    Button,
    Description,
    DescriptionContainer,
    Img,
    ImgContainer,
    PostContainer,
    TextContainer,
    Title,
    TitleContainer,
} from "./postComponents";

export const Post = ({ imageURL, title, description, slug }: shortPostInterface) => {
    return (
        <>
            <PostContainer>
                <ImgContainer>
                    <Link to={`/blog/${slug}`}>
                        <Img src={imageURL} />
                    </Link>
                </ImgContainer>
                <TextContainer>
                    <TitleContainer>
                        <Title>{title}</Title>
                    </TitleContainer>
                    <DescriptionContainer>
                        <Description>{description}</Description>
                    </DescriptionContainer>
                    <Link to={`/blog/${slug}`}>
                        <Button>Read More</Button>
                    </Link>
                </TextContainer>
            </PostContainer>
        </>
    );
};

export default Post;
