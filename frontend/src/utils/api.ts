import axios from 'axios';
const token = localStorage.getItem("token");
const api = axios.create({
    baseURL: process.env.NODE_ENV == "development" ? 'http://localhost:5010/api' : "https://blog.chirilovnarcis.ro/api",
     headers: {
      'Content-Type': 'application/json',
     },
    },
)
if (token){
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export default api;