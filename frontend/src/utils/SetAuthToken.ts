//add token to header

import api from "./api";

const SetAuthToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return;
    }
    delete api.defaults.headers.common["Authorization"];
};

export default SetAuthToken;
