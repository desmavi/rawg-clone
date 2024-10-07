import createRequest from "./https-request";

export interface Genre {
    id: number,
    name: string,
    slug: string
}

export interface GenresList {
    count: number,
    results: Genre[]
}

export default createRequest("/genres")