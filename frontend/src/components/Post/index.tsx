import React from "react";
import { Link } from "react-router-dom";
import { propsObj } from "../../pages/Blog";
import { ButtonCard } from "../HomepageBlog/BlogCard/BlogCardComponents";
import { Button, Description, DescriptionContainer, Img, ImgContainer, PostContainer, TextContainer, Title, TitleContainer } from "./postComponents";

export const Post:React.FC<propsObj> = ({img, title, descriere}) => {
    return (
        <>
            <PostContainer>
                <ImgContainer>
            <Link to={`/blog/${title.replaceAll(" ", "-").toLowerCase()}`}> 

                    <Img src={img}/>
                </Link>

                </ImgContainer>
                <TextContainer>
                    <TitleContainer>
                        <Title>{title}</Title>
                    </TitleContainer>
                    <DescriptionContainer>
                        <Description>
                            {descriere.split(/\s+/).slice(0,20).join(" ")}
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