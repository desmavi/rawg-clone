import createRequest from "./https-request";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface PlatformList {
    count: number,
    results: Platform[]
}

export default createRequest("/platforms")