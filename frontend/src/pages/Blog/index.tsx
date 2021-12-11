import BlogComponent from "../../components/BlogComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/slices/posts";
import { RootState } from "../../redux/store";
export interface propsObj  {
    title: string;
    img: string;
    descriere: string;
}
export type props = propsObj[];

const Blog = () => {

    const posts = useSelector((state:RootState) => state.posts)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getPosts())
    },[])
    return (
        <>  
        {posts.loading && (
            <h1 style={{color:"black", padding:"20px"}}>Loading posts...</h1>
        )}
        {posts.error && (
            <h1 style={{color:"red", padding:"20px"}}>Error appeard while loading posts</h1>
        )}
        {!posts.error && !posts.loading && (
            <BlogComponent data ={posts.result} /> 

        )}
        </>
    )
}

export default Blog;