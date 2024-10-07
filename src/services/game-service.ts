import createRequest from "./https-request";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Platforms {
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
    parent_platforms: Platforms[],
    metacritic: number

}

export interface GameList {
    count: number,
    results: Game[]
}

export default createRequest("/games")