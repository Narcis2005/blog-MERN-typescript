import React from "react";
import { shortPostInterface } from "../../redux/types/post";
import { BlogContainer } from "../BlogComponent/BlogContainerComponents";
import Post from "../Post";
import { Title } from "../GetPostsByTagComponent/GetPostsByTagComponents";

const GetPostsByCategoryComponent = ({data, category} : {data: shortPostInterface[], category: string | null}) => {
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
            
        </BlogContainer>
        </>
    );
};

export default GetPostsByCategoryComponent;