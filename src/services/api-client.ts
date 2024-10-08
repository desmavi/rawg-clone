import axios from "axios";

const BASE_URL = 'https://apiexpress-kii3zc8ja-emanuelas-projects-04ae6b4b.vercel.app'

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
