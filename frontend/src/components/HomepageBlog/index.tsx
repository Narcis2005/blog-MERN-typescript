import { Container } from "../../globalStyles";
import { CardsContainer, HomepageBlogContainer } from "./homepageBlogComponents";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../index";
import { getPosts } from "../../redux/slices/posts";
import React from "react";

const HomepageBlog = () => {
    const reduxPosts = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts({ page: 1, perPage: 3 }));
    }, []);
    return (
        <>
            {reduxPosts.status === "loading" && (
                <HomepageBlogContainer>
                    <Container>
                        <h1>Posts Are loading</h1>
                    </Container>
                </HomepageBlogContainer>
            )}
            {reduxPosts.error && (
                <HomepageBlogContainer>
                    <Container>
                        <h1 style={{ color: "red" }}>An error appeard while loading posts</h1>
                    </Container>
                </HomepageBlogContainer>
            )}
            {!reduxPosts.result ||
                (!reduxPosts.result.results && (
                    <HomepageBlogContainer>
                        <Container>
                            <h1 style={{ color: "red" }}>An error appeard while loading posts</h1>
                        </Container>
                    </HomepageBlogContainer>
                ))}
            {reduxPosts.status === "success" && reduxPosts.result && (
                <HomepageBlogContainer>
                    <CardsContainer>
                        {reduxPosts.result.results.slice(0, 3).map((element, key) => (
                            <BlogCard
                                imageURL={element.imageURL}
                                title={element.title}
                                //To get only the first 10 words
                                description={element.description}
                                slug={element.slug}
                                key={key}
                            />
                        ))}
                    </CardsContainer>
                </HomepageBlogContainer>
            )}
        </>
    );
};

export default HomepageBlog;
