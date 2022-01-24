import React from "react";
import { shortPostInterface } from "../../redux/types/post";
import { BlogContainer } from "../BlogComponent/BlogContainerComponents";
import Pagination from "../Pagination";
import Post from "../Post";
import { Title } from "./GetPostsByTagComponents";

const GetPostsByTagComponent = ({data, tag, totalPages, currentPage, handleClick} : {data: shortPostInterface[], tag: string | null, totalPages: number, currentPage: number, handleClick: (e:React.MouseEvent<HTMLButtonElement>) => void}) => {
    return (
        <>
        <BlogContainer>
            {!tag && (
                <Title>Please provide a tag using the query parameter tag</Title>
            )}
            {tag && (
                <>
                    <Title>Posts with tag: {tag}</Title>
            {data.map((element: shortPostInterface, key: number) => (
                <Post
                    imageURL={element.imageURL}
                    title={element.title}
                    description={element.description}
                    slug={element.slug}
                    key={key}
                />
            ))}
                </>
            )}
            <Pagination totalPages={totalPages} currentPage={currentPage} handleClick={handleClick}/>
        </BlogContainer>
        </>
    );
};

export default GetPostsByTagComponent;