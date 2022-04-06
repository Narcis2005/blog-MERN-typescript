import React from "react";
import { Link } from "react-router-dom";
import { shortPostInterface } from "../../redux/types/post";
import {
    Button,
    Description,
    DescriptionContainer,
    Dots,
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
                    <Link to={`/blog/post/${slug}`}>
                        <Img src={imageURL} alt={`Image of post ${title}`} width="340" height="250" />
                    </Link>
                </ImgContainer>
                <TextContainer>
                    <TitleContainer>
                        <Title>{title}</Title>
                    </TitleContainer>
                    <DescriptionContainer>
                        <Description>
                            {description}
                            <Link to={`/blog/post/${slug}`}>
                                <Dots>...</Dots>
                            </Link>
                        </Description>
                    </DescriptionContainer>
                    <Link to={`/blog/post/${slug}`}>
                        <Button>Continue reading</Button>
                    </Link>
                </TextContainer>
            </PostContainer>
        </>
    );
};

export default Post;
