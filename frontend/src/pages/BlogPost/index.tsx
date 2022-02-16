import { useParams } from "react-router";
import BlogPostComponent from "../../components/BlogPostComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../index";
import { useEffect } from "react";
import { getPost } from "../../redux/slices/post";
import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";
import React from "react";
import { Helmet } from "react-helmet";

const BlogPost: React.FC = () => {
    const { slug } = useParams();
    const post = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!slug) {
            dispatch(getPost("no-slug"));
            return;
        }
        dispatch(getPost(slug));
    }, []);
    return (
        <>
            {post.status === "loading" && (
                <DarkBackground>
                    <MainText color="white">Post is loading</MainText>
                </DarkBackground>
            )}
            {post.status === "failed" && !post.error && (
                <DarkBackground>
                    <MainText color="red">An error appeard</MainText>
                </DarkBackground>
            )}
            {post.error && !post.error.message && (
                <DarkBackground>
                    <MainText color="red">An error appeard</MainText>
                </DarkBackground>
            )}
            {post.error && post.error.message && (
                <DarkBackground>
                    <MainText color="red">{post.error.message}</MainText>
                </DarkBackground>
            )}
            {!post.result && post.status !== "loading" && !post.error && (
                <DarkBackground>
                    <MainText color="red">Post is empty</MainText>
                </DarkBackground>
            )}
            {post.status === "success" && post.result && (
                <>
                    <Helmet>
                        <meta name="description" content={post.result.description} />
                        <meta property="og:title" content={post.result.title} />
                        <meta
                            property="og:url"
                            content={`http://blog.chirilovnarcis.ro/blog/post/${post.result.slug}`}
                        />
                        <meta property="og:image" content={post.result.imageURL} />
                        <meta property="og:description" content={post.result.description} />
                        <title>{post.result.title}</title>
                    </Helmet>
                    <BlogPostComponent {...post.result} />
                </>
            )}
        </>
    );
};

export default BlogPost;
