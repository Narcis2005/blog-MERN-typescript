import React from "react";
import { Helmet } from "react-helmet";
import AddPostComponent from "../../components/AddPostComponent";

const AddPost = () => {
    return (
        <>
            <Helmet>   
            <meta name="description" content={`Add a post on this blog and contribute` }/>
            <meta property="og:title" content={`Add Post - Astronomy blog`}/>
            <meta property="og:url" content="http://blog.chirilovnarcis.ro/blog/add"/>
            <meta property="og:image" content="https://blog.chirilovnarcis.ro/hero.webp"/>
            <meta property="og:description" content={`Add a post on this blog and contribute` }/>
            <title>{`Add Post - Astronomy blog`}</title>
        </Helmet>
            <AddPostComponent />
        </>
    );
};

export default AddPost;
