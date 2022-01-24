import React from "react";
import { shortPostInterface } from "../../redux/types/post";
import { BlogContainer } from "../BlogComponent/BlogContainerComponents";
import Post from "../Post";
import { Title } from "../GetPostsByTagComponent/GetPostsByTagComponents";
import Pagination from "../Pagination";

const GetPostsByCategoryComponent = ({data, category, totalPages, currentPage, handleClick} : {data: shortPostInterface[], category: string | null, totalPages: number, currentPage: number, handleClick: (e:React.MouseEvent<HTMLButtonElement>) => void}) => {
    return (
        <>
        <BlogContainer>
            {!category && (
                <Title>Please provide a category using the query parameter category</Title>
            )}
            {category && (
                <>
                    <Title>Posts with category: {category}</Title>
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

export default GetPostsByCategoryComponent;