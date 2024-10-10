import { Genre } from "./genre-service";
import createRequest from "./https-request";
import { Platform } from "./platform-service";


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
    metacritic: number,
    genres: Genre[]

}

export interface GameList {
    count: number,
    results: Game[] | []
}

export default createRequest("/games")