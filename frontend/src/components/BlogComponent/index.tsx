import { postInterface } from "../../redux/types/post";
import Post from "../Post";
import { BlogContainer } from "./BlogContainerComponents";
import React from "react";

const BlogComponent = ({ data }: { data: postInterface[] }) => {
    return (
        <BlogContainer>
            {data.map((element, key) => (
                <Post imageURL={element.imageURL} title={element.title} description={element.description} key={key} />
            ))}
        </BlogContainer>
    );
};

export default BlogComponent;
