import axios from "axios";

const BASE_URL = 'hhttps://apiexpress-eight.vercel.app'

const api = axios.create({
    baseURL: BASE_URL,
});

//PER PASSARE DEFAULT PARAMS ALLA RICHIESTA
/* api.interceptors.request.use(config => {
    config.params = {
        ...config.params,
    };
    return config;
}); */

export default api
