import { postInterface } from "../../redux/types/post";
import { BlogPostComponentContainer,  Content,  ContentContainer,  ImageContainer, Img, Title, TitleContainer } from "./BlogPostComponents";

const BlogPostComponent:React.FC<postInterface> = ({imageURL, title, description}) => {
    return (
        <BlogPostComponentContainer >
            <ImageContainer>
                <Img src={imageURL}/>
            </ImageContainer>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <ContentContainer>
                <Content>{description}</Content>
            </ContentContainer>
        </BlogPostComponentContainer >
    )
}

export default BlogPostComponent;