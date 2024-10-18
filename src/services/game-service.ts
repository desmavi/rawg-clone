import { Genre } from "./genre-service";
import createRequest from "./https-request";
import { Platform } from "./platform-service";

export interface  Publisher {
    id: number,
    name: string,
    slug: string
}

export interface GameObjectProps {
    id: number,
    name: string,
    slug: string,
    description_raw: string,
    metacritic: number,
    parent_platforms: Platforms[],
    genres: Genre[],
    publishers: Publisher[]
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
    metacritic: number,
    genres: Genre[]

}

export interface GameList {
    count: number,
    results: Game[] | []
}

export default createRequest("/games")