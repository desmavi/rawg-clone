import createRequest from "./https-request";

export interface Genre {
    id: number,
    name: string,
    slug: string
}

export default createRequest("/genres")