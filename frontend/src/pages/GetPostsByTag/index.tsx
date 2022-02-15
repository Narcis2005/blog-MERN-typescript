import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { createSearchParams, useLocation, useNavigate, useParams } from "react-router-dom";
import GetPostsByTagComponent from "../../components/GetPostsByTagComponent";
import { DarkBackground } from "../../containers/DarkBackground";
import { MainText } from "../../globalStyles";
import { shortPostInterface } from "../../redux/types/post";
import api from "../../utils/api";

const GetPostsByTag = () => {
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
    const { tag } = useParams();
    const [result, setResult] = useState<ICall>();
    useEffect(() => {
        if (tag) {
            if (!query.get("page") || isNaN(Number(query.get("page"))) || Number(query.get("page")) < 1) {
                navigate({
                    search: `?${createSearchParams({
                        page: "1",
                    }).toString()}`,
                });
            }

            api.get<IData>(
                `/post/posts-by-tag?tag=${tag}&page=${
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
        if (tag) {
            navigate({
                search: `?${createSearchParams({
                    page: e.currentTarget.value,
                }).toString()}`,
            });
            api.get<IData>(`/post/posts-by-tag?tag=${tag}&page=${e.currentTarget.value}&perPage=10`)
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
           { tag && <Helmet>   
            <meta name="description" content={`Search result for tag: "${tag}" ` }/>
            <meta property="og:title" content={`"${tag}" tag search results - Astronomy blog`}/>
            <meta property="og:url" content="http://blog.chirilovnarcis.ro/blog/tag/:tag"/>
            <meta property="og:image" content="https://blog.chirilovnarcis.ro/hero.webp"/>
            <meta property="og:description" content={`Search result for tag: "${tag}" ` }/>
            <title>{`"${tag}" tag search results - Astronomy blog`}</title>
        </Helmet>}
            {!tag && (
                <DarkBackground>
                    <MainText color="red">Specify a tag using tag query parameter</MainText>
                </DarkBackground>
            )}
            {result?.status === "loading" && tag && (
                <DarkBackground>
                    <MainText color="white">Loading posts...</MainText>
                </DarkBackground>
            )}
            {result?.status === "failed" && tag && (
                <DarkBackground>
                    <MainText color="red">Error appeard while posts were loading</MainText>
                </DarkBackground>
            )}
            {result?.data?.results.length === 0 && tag && Number(query.get("page")) === 1 && (
                <DarkBackground>
                    <MainText color="red">No posts were found with tag {tag}</MainText>
                </DarkBackground>
            )}
            {result?.data?.results.length === 0 && tag && Number(query.get("page")) > 1 && (
                <DarkBackground>
                    <MainText color="red">
                        There are no more posts with tag {tag}. The last page is {result.data.totalPages}
                    </MainText>
                </DarkBackground>
            )}
            {result?.status === "success" && result.data && result.data.results.length > 0 && (
                <GetPostsByTagComponent
                    tag={tag ? tag : null}
                    data={result.data.results}
                    totalPages={result.data.totalPages}
                    currentPage={Number(query.get("page"))}
                    handleClick={handleClick}
                />
            )}
        </>
    );
};

export default GetPostsByTag;
