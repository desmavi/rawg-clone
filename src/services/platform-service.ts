import createRequest from "./https-request";


export interface Platform {
    id: number,
    name: string,
    slug: string
}

export default createRequest("/platforms")