import axios, { Axios } from 'axios';

const axios = Axios.creaate({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "X-Request-With": "XMLHttp",
    },
    withCredentials: true
})

export default axios;
