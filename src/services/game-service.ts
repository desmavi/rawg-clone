import createRequest from "./https-request";

export interface Game {
    id: number,
    name: string
}

export interface GameList {
    count: number,
    results: Game[]
}

export default createRequest("/games")