import axios from "axios";
import React, { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import GetPostsByCategoryComponent from "../../components/GetPostsByCategoryComponent";
import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";
import { shortPostInterface } from "../../redux/types/post";
import api from "../../utils/api";

const GetPostsByCategory = () => {
    interface IData {
        page: number;
            perPage: number;
            results: shortPostInterface[];
            totalPages: number;
            numberOfElements: number;
    }
    interface ICall {
        status: "loading" | "failed" | "success";
        data: IData | null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        error: any;
    }
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    const Category = query.get("category");
    const [result, setResult] = useState<ICall>();
    useEffect(()=> {
        if(Category){
        if (!query.get("page") || isNaN(Number(query.get("page"))) || Number(query.get("page")) < 1) {
            navigate({
                search: `?${createSearchParams({
                    page: "1",
                    category: Category
                }).toString()}`,
            });
        }
        
            api.get<IData>(`/post/posts-by-category?category=${Category}&page=${Number(query.get("page")) > 0 ? Number(query.get("page")) : 1}&perPage=10`)
            .then((data) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                setResult({data: data.data, status: "success", error: null});
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) { 
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    setResult({data: null, error: error.response?.data.message, status: "failed"});
                }
            });
        }
        
    },[]);
    return(
        <>
        {!Category && (
                <DarkBackground>
                <MainText color="red">Specify a tag using tag query parameter</MainText>
            </DarkBackground>
            )}
        {result?.status === "loading" && Category &&(
                <DarkBackground>
                    <MainText color="white">Loading posts...</MainText>
                </DarkBackground>
            )}
            {result?.status === "failed" && Category && (
                <DarkBackground>
                    <MainText color="red">Error appeard while posts were loading</MainText>
                </DarkBackground>
            )}
            {result?.data?.results.length === 0 && Category && Number(query.get("page")) === 1 && (
                    <DarkBackground>
                        <MainText color="red">No posts were found in category {Category}</MainText>
                    </DarkBackground>
            )}
            {console.log(query.get("page"))}
            {result?.data?.results.length === 0 && Category && Number(query.get("page")) > 1 && (
                    <DarkBackground>
                        <MainText color="red">There are no more posts on category {Category}. The last page is {result.data.totalPages}</MainText>
                    </DarkBackground>
            )}
            {result?.status === "success" && result.data && result.data.results.length > 0 && (
                <GetPostsByCategoryComponent category={Category} data={result.data.results} />
            )}

        </>
    );
};

export default GetPostsByCategory;