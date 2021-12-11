import { useParams } from "react-router"
import Navbar from "../../components/Navbar";
import BlogPostComponent from "../../components/BlogPostComponent";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getPost } from "../../redux/slices/post";
export interface propsObj  {
    title: string;
    img: string;
    descriere: string;
}

const BlogPost:React.FC = () => {
    
    const {slug} = useParams();

    const post = useSelector((state:RootState) => state.post)
    const dispatch = useDispatch();
    useEffect(()=> {
        if(!slug) {
            dispatch(getPost("no-slug"));
            return;
        }
        dispatch(getPost(slug))
    },[])
    return (
        <>  
            {post.loading && (
                <h1 style={{color: "black", padding: "20px"}}>Post is loading</h1>
            )}
             {post.error && !post.error.message &&(
                <h1 style={{color:"red", padding: "20px"}}>An error appeard</h1>
            )}
            {post.error && post.error.message && (
                <h1 style={{color:"red", padding: "20px"}}>{post.error.message}</h1>
            )}
            {!post.error && !post.loading && (
                <BlogPostComponent {...post.result}/>

            )}
           
        </>
    )
}

export default BlogPost;