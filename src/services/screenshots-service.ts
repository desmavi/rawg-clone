import api from "./api-client";

export interface Screenshot {
    id: number,
    image: string,
    is_deleted: boolean
}

export interface Screenshots {
    count: number,
    results: Screenshot[]
}


function getScreenshots<T>(gameId: number | undefined) {
    return api.get<T>(`/games/${gameId}/screenshots`)
        .then(res => res.data);
}

export { getScreenshots }