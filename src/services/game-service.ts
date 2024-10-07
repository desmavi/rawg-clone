import createRequest from "./https-request";

export interface Platform {
    id: number,
    image_background: string,
    name: string
}

export interface Platforms {
    released_at: string,
    platform: Platform

}

export interface Ratings {
    id: number,
    title: string,
    count:  number,
    percent: number
}

export interface Game {
    id: number,
    name: string,
    slug: string,
    background_image: string,
    ratings: Ratings[],
    platforms: Platforms[]
}

export interface GameList {
    count: number,
    results: Game[]
}

export default createRequest("/games")