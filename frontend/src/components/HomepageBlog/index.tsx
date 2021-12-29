import { Container } from "../../globalStyles";
import { HomepageBlogContainer } from "./homepageBlogComponents";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { getPosts } from "../../redux/slices/posts";
import { RootState } from "../../redux/store";
import { getPosts } from "../../redux/slices/posts";



const HomepageBlog = () => {
    const reduxPosts = useSelector((state:RootState) => state.posts)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getPosts({page: 1, perPage: 3}))
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
        {!reduxPosts.result || !reduxPosts.result.results && (
            <HomepageBlogContainer>
                <Container>
                     <h1 style= {{color: "red"}}>An error appeard while loading posts</h1>
                </Container>
            </HomepageBlogContainer>
        )}
        {!reduxPosts.loading && !reduxPosts.error && reduxPosts.result &&(
            <HomepageBlogContainer>
            <Container>
                {reduxPosts.result.results.slice(0,3).map((element, key) => 
                (
                
                <BlogCard imageURL={element.imageURL} 
                title={element.title}
                //To get only the first 10 words
                 description={element.description.split(/\s+/).slice(0,10).join(" ")} key={key} />
                 ))}
            </Container>
        </HomepageBlogContainer>
        )}
            
        </>
    )
}

export default HomepageBlog;