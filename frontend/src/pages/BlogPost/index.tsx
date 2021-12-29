import { useParams } from "react-router"
import Navbar from "../../components/Navbar";
import BlogPostComponent from "../../components/BlogPostComponent";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getPost } from "../../redux/slices/post";
import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";

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
                <DarkBackground>
                    <MainText color="white">Post is loading</MainText>
                </DarkBackground>
            )}
             {post.error && !post.error.message &&(
                <DarkBackground>
                    <MainText color="red">An error appeard</MainText>
                </DarkBackground>
            )}
            {post.error && post.error.message && (
                <DarkBackground>
                    <MainText color="red">{post.error.message}</MainText>
                </DarkBackground>
            )}
            {!post.result && !post.loading && !post.error && (
                <DarkBackground>
                    <MainText color="red">Post is empty</MainText>
                </DarkBackground>
            )}
            {!post.error && !post.loading && post.result && (
                <BlogPostComponent {...post.result}/>

            )}
           
        </>
    )
}

export default BlogPost;