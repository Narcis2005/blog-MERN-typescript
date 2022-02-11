import { URL } from "url";
const isURL = (string: string) => {
    // let url;

    try {
        const url = new URL(string);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
        return false;
    }
};

export default isURL;
