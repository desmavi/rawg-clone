import axios from "axios";

export interface GetResponse<T> {
    count: number;
    results: T[];
    next: string | null
}

//const BASE_URL = 'https://apiexpress-eight.vercel.app'
const BASE_URL = "http://localhost:3000"

const api = axios.create({
    baseURL: BASE_URL,
});


export default api
