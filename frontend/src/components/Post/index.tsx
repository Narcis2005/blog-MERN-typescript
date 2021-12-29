import React from "react";
import { Link } from "react-router-dom";
import { postInterface } from "../../redux/types/post";
import { Button, Description, DescriptionContainer, Img, ImgContainer, PostContainer, TextContainer, Title, TitleContainer } from "./postComponents";

export const Post:React.FC<postInterface> = ({imageURL, title, description}) => {
    return (
        <>
            <PostContainer>
                <ImgContainer>
            <Link to={`/blog/${title.replaceAll(" ", "-").toLowerCase()}`}> 

                    <Img src={imageURL}/>
                </Link>

                </ImgContainer>
                <TextContainer>
                    <TitleContainer>
                        <Title>{title}</Title>
                    </TitleContainer>
                    <DescriptionContainer>
                        <Description>
                            {description.split(/\s+/).slice(0,20).join(" ")}
                        </Description>
                    </DescriptionContainer>
                    <Link to={`/blog/${title.replaceAll(" ", "-").toLowerCase()}`}>
                         <Button>Read More</Button>
                    </Link>
                    
                </TextContainer>
             
            </PostContainer>
        </>
    )
}

export default Post;