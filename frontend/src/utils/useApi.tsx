import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import api from "./api";

const useApi = ({
    url,
    method,
    body = null,
}: {
    url: string;
    method: "post" | "get" | "put" | "delete";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any;
}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [status, setStatus] = useState("idle");

    const fetchData = () => {
        setStatus("loading");
        api[method](url, body)
            .then((res) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                setResponse(res.data);
                setStatus("success");
            })
            .catch((error) => {
                const err = error as AxiosError;
                if (err.response) {
                    if (err.response.data.message === "The session ended. Please reconnect") return;
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    setError(err.response.data.message);
                    return;
                }
                console.log(error);
                setError("An unkown error appeard. Please contact us");
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body]);

    return { response, error, status };
};

export default useApi;
