import { propsObj } from "../../pages/BlogPost";
import { BlogPostComponentContainer,  Content,  ContentContainer,  ImageContainer, Img, Title, TitleContainer } from "./BlogPostComponents";

const BlogPostComponent:React.FC<propsObj> = ({img, title, descriere}) => {
    return (
        <BlogPostComponentContainer >
            <ImageContainer>
                <Img src={img}/>
            </ImageContainer>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <ContentContainer>
                <Content>{descriere}</Content>
            </ContentContainer>
        </BlogPostComponentContainer >
    )
}

export default BlogPostComponent;