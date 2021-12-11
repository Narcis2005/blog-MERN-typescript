import React from "react";
import { Link } from "react-router-dom";
import { propsObj } from "..";
import { ButtonCard, CardContainer, Description, DescriptionContainer, Img, ImgContainer, TextContainer, Title, TitleContainer } from "./BlogCardComponents";


const BlogCard:React.FC<propsObj> = ({img, title, descriere}) => {
    return (
        <CardContainer>
            <ImgContainer>
                <Img src={img}/>
            </ImgContainer>
            <TextContainer>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                <DescriptionContainer>
                    <Description>
                        {descriere}
                    </Description>
                </DescriptionContainer>
            </TextContainer>
            <Link to={`/blog/${title.replaceAll(" ", "-").toLowerCase()}`}>
            <ButtonCard>Read More</ButtonCard>
             </Link>
                
        </CardContainer>
    )
}

export default BlogCard;