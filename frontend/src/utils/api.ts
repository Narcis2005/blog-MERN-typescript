import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV == "development" ? 'http://localhost:5000/api' : "https://blog.chirilovnarcis.ro/api",
     headers: {
      'Content-Type': 'application/json',
     },
    },
)

export default api;