import { AxiosError } from "axios";

const handleAxiosError = (error: Error): string => {
    const err = error as AxiosError;
    if (err.response) {
        if (err.response.data.message === "The session ended. Please reconnect") return "return";
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return err.response.data.message;
    }
    console.error(error);
    return "An unkown error appeard. Please contact us!";
};
export default handleAxiosError;
