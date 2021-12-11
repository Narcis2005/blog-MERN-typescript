import { Container } from "../../globalStyles";
import { HomepageBlogContainer } from "./homepageBlogComponents";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { getPosts } from "../../redux/slices/posts";
import { RootState } from "../../redux/store";
import { getPosts } from "../../redux/slices/posts";

export interface propsObj  {
    title: string;
    img: string;
    descriere: string;
}


const HomepageBlog = () => {
    const reduxPosts = useSelector((state:RootState) => state.posts)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getPosts())
    },[])
    return (
        <>
        {reduxPosts.loading && (
            <HomepageBlogContainer>
                <Container>
                    <h1>Posts Are loading</h1>
                </Container>
            </HomepageBlogContainer>
        )}
        {reduxPosts.error && (
            <HomepageBlogContainer>
                <Container>
                     <h1 style= {{color: "red"}}>An error appeard while loading posts</h1>
                </Container>
            </HomepageBlogContainer>
        )}
        {!reduxPosts.loading && !reduxPosts.error && (
            <HomepageBlogContainer>
            <Container>
                {reduxPosts.result.slice(0,3).map((element, key) => 
                (
                
                <BlogCard img={element.img} 
                title={element.title}
                //To get only the first 10 words
                 descriere={element.descriere.split(/\s+/).slice(0,10).join(" ")} key={key} />
                 ))}
            </Container>
        </HomepageBlogContainer>
        )}
            
        </>
    )
}

export default HomepageBlog;