import { shortPostInterface } from "../../redux/types/post";
import Post from "../Post";
import { BlogContainer } from "./BlogContainerComponents";
import React from "react";
import { Title } from "../GetPostsByTagComponent/GetPostsByTagComponents";
import Pagination from "../Pagination";
import SearchBox from "../SearchBox";

const BlogComponent = ({
    data,
    currentPage,
    handleClick,
    totalPages,
    handleSubmit,
    handleChange,
    search
}: {
    data: shortPostInterface[];
    currentPage: number;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    totalPages: number;
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    search: string;
}) => {
    return (
        <>
            <BlogContainer>
                <Title>Blog Posts</Title>
                <SearchBox handleSubmit={handleSubmit} handleChange={handleChange} value={search}/>
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
