import axios from "axios";
import React, { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import GetPostsByTagComponent from "../../components/GetPostsByTagComponent";
import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";
import api from "../../utils/api";

const GetPostsByTag = () => {
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    const tag = query.get("tag");
    const [result, setResult] = useState({
        status: "loading",
        data: [],
        error: null
    });
    useEffect(()=> {
        if(tag){
        if (!query.get("page") || isNaN(Number(query.get("page"))) || Number(query.get("page")) < 1) {
            navigate({
                search: `?${createSearchParams({
                    page: "1",
                    tag: tag
                }).toString()}`,
            });
        }
        
            api.get(`/post/posts-by-tag?tag=${tag}&page=${Number(query.get("page")) > 0 ? Number(query.get("page")) : 1}&perPage=10`)
            .then((data) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                setResult({...result, data: data.data.results, status: "success"});
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) { 
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    setResult({...result, error: error.response?.data.message, status: "failed"});
                }
            });
        }
        
    },[]);
    return(
        <>
        {result.status === "loading" && tag && (
                <DarkBackground>
                    <MainText color="white">Loading posts...</MainText>
                </DarkBackground>
            )}
            {!tag && (
                <DarkBackground>
                <MainText color="red">Specify a tag using tag query parameter</MainText>
            </DarkBackground>
            )}
            {result.status === "failed" && tag &&(
                <DarkBackground>
                    <MainText color="red">Error appeard while posts were loading</MainText>
                </DarkBackground>
            )}
            {result.data.length === 0 && tag && (
                    <DarkBackground>
                        <MainText color="red">No posts were found with tag {tag}</MainText>
                    </DarkBackground>
            )}
            {result.status === "success" && result.data && (
                <GetPostsByTagComponent tag={tag} data={result.data} />
            )}

        </>
    );
};

export default GetPostsByTag;