import BlogComponent from "../../components/BlogComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/slices/posts";
import { RootState } from "../../redux/store";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";
import React from "react";

const Blog = () => {
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    useEffect(() => {
        if (!query.get("page") || isNaN(Number(query.get("page"))) || Number(query.get("page")) < 1) {
            navigate({
                search: `?${createSearchParams({
                    page: "1",
                }).toString()}`,
            });
        }
        dispatch(getPosts({ page: Number(query.get("page")) > 0 ? Number(query.get("page")) : 1, perPage: 10 }));
    }, []);
    const posts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) : void => {
        e.preventDefault();
        navigate({
            search: `?${createSearchParams({
                page: e.currentTarget.value,
            }).toString()}`,
        });
        console.log(query.get("page"));
        dispatch(getPosts({ page: Number(e.currentTarget.value), perPage: 10 }));
    };
    return (
        <>
            {posts.status === "loading" && (
                <DarkBackground>
                    <MainText color="white">Loading posts...</MainText>
                </DarkBackground>
            )}
            {posts.status === "failed" && (
                <DarkBackground>
                    <MainText color="red">Error appeard while posts were loading</MainText>
                </DarkBackground>
            )}
            {!posts.result ||
                posts.result.results.length === 0 && (
                    <DarkBackground>
                        <MainText color="red">No posts were found on this page. The last page with posts is {posts.result.totalPages}</MainText>
                    </DarkBackground>
                )}
            {posts.status === "success" && posts.result && posts.result.results.length > 0 &&(
                <>
                    <BlogComponent data={posts.result.results} currentPage={Number(query.get("page"))} handleClick={handleClick} totalPages={posts.result.totalPages}/>
                </>
            )}
        </>
    );
};

export default Blog;
