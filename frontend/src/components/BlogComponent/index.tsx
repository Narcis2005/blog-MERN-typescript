import { shortPostInterface } from "../../redux/types/post";
import Post from "../Post";
import { BlogContainer } from "./BlogContainerComponents";
import React from "react";
import { Title } from "../GetPostsByTagComponent/GetPostsByTagComponents";

const BlogComponent = ({ data }: { data: shortPostInterface[] }) => {
    return (
        <>
        <BlogContainer>
        <Title>Blog Posts</Title>

            {data.map((element: shortPostInterface, key: number) => (
                <Post
                    imageURL={element.imageURL}
                    title={element.title}
                    description={element.description}
                    slug={element.slug}
                    key={key}
                />
            ))}
        </BlogContainer>
        </>
    );
};

export default BlogComponent;
