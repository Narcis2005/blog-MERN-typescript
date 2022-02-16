import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { createSearchParams, useLocation, useNavigate, useParams } from "react-router-dom";
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
    const { category } = useParams();
    const [result, setResult] = useState<ICall>();

    useEffect(() => {
        if (category) {
            if (!query.get("page") || isNaN(Number(query.get("page"))) || Number(query.get("page")) < 1) {
                navigate({
                    search: `?${createSearchParams({
                        page: "1",
                    }).toString()}`,
                });
            }

            api.get<IData>(
                `/post/posts-by-category?category=${category}&page=${
                    Number(query.get("page")) > 0 ? Number(query.get("page")) : 1
                }&perPage=10`,
            )
                .then((data) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    setResult({ data: data.data, status: "success", error: null });
                })
                .catch((error) => {
                    if (axios.isAxiosError(error)) {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        setResult({ data: null, error: error.response?.data.message, status: "failed" });
                    }
                });
        }
    }, []);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (category) {
            navigate({
                search: `?${createSearchParams({
                    page: e.currentTarget.value,
                }).toString()}`,
            });
            api.get<IData>(`/post/posts-by-category?category=${category}&page=${e.currentTarget.value}&perPage=10`)
                .then((data) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    setResult({ data: data.data, status: "success", error: null });
                })
                .catch((error) => {
                    if (axios.isAxiosError(error)) {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        setResult({ data: null, error: error.response?.data.message, status: "failed" });
                    }
                });
        }
    };
    return (
        <>
            {category && (
                <Helmet>
                    <meta name="description" content={`Search result for category: "${category}" `} />
                    <meta property="og:title" content={`"${category}" category search results - Astronomy blog`} />
                    <meta property="og:url" content="http://blog.chirilovnarcis.ro/blog/category/:category" />
                    <meta property="og:image" content="https://blog.chirilovnarcis.ro/hero.webp" />
                    <meta property="og:description" content={`Search result for category: "${category}" `} />
                    <title>{`"${category}" category search results - Astronomy blog`}</title>
                </Helmet>
            )}
            {!category && (
                <DarkBackground>
                    <MainText color="red">Specify a category using category query parameter</MainText>
                </DarkBackground>
            )}
            {result?.status === "loading" && category && (
                <DarkBackground>
                    <MainText color="white">Loading posts...</MainText>
                </DarkBackground>
            )}
            {result?.status === "failed" && category && (
                <DarkBackground>
                    <MainText color="red">Error appeard while posts were loading</MainText>
                </DarkBackground>
            )}
            {result?.data?.results.length === 0 && category && Number(query.get("page")) === 1 && (
                <DarkBackground>
                    <MainText color="red">No posts were found in category {category}</MainText>
                </DarkBackground>
            )}
            {result?.data?.results.length === 0 && category && Number(query.get("page")) > 1 && (
                <DarkBackground>
                    <MainText color="red">
                        There are no more posts on category {category}. The last page is {result.data.totalPages}
                    </MainText>
                </DarkBackground>
            )}
            {result?.status === "success" && result.data && result.data.results.length > 0 && (
                <GetPostsByCategoryComponent
                    category={category ? category : null}
                    data={result.data.results}
                    totalPages={result.data.totalPages}
                    currentPage={Number(query.get("page"))}
                    handleClick={handleClick}
                />
            )}
        </>
    );
};

export default GetPostsByCategory;
