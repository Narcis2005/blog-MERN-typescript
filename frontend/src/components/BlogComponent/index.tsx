import { shortPostInterface } from "../../redux/types/post";
import Post from "../Post";
import { BlogContainer } from "./BlogContainerComponents";
import React from "react";
import { Title } from "../GetPostsByTagComponent/GetPostsByTagComponents";
import Pagination from "../Pagination";

const BlogComponent = ({
    data,
    currentPage,
    handleClick,
    totalPages,
}: {
    data: shortPostInterface[];
    currentPage: number;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    totalPages: number;
}) => {
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
                <Pagination currentPage={currentPage} handleClick={handleClick} totalPages={totalPages} />
            </BlogContainer>
        </>
    );
};

export default BlogComponent;
