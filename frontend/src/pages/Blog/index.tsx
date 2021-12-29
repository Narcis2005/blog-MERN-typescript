import BlogComponent from "../../components/BlogComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { getPosts } from "../../redux/slices/posts";
import { RootState } from "../../redux/store";
import {createSearchParams, useLocation, useNavigate, useParams} from "react-router-dom";
import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";

const Blog = () => {
    const navigate = useNavigate();
    let query = new URLSearchParams(useLocation().search);

    useEffect(()=>{
      if(!query.get("page") || isNaN(Number(query.get("page"))) || Number(query.get("page")) < 1 ){
        navigate({
            search: `?${createSearchParams({
                page: "1"
            })}`
        });
        return;
      }
      dispatch(getPosts({page: Number(query.get("page")), perPage: 10}))
    },[])
    const posts = useSelector((state:RootState) => state.posts)
    const dispatch = useDispatch();
    return (
        <>  
        {posts.loading && (
            <DarkBackground>
                <MainText color="white">Loading posts...</MainText>
            </DarkBackground>
        )}
        {posts.error && (
            <DarkBackground>
                 <MainText color="red">Error appeard while posts were loading</MainText>
            </DarkBackground>
        )}
        {!posts.result || !posts.result.results && (
            <DarkBackground>
                 <MainText color="red">No posts were found</MainText>
            </DarkBackground>
        )}
        {!posts.error && !posts.loading && posts.result && (
            <>
                <BlogComponent data ={posts.result.results} /> 
            </>
        )}
        </>
    )
}

export default Blog;
