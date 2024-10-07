import axios from "axios";

const BASE_URL = 'http://localhost:8000'

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
