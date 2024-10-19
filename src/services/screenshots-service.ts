export interface Screenshot {
    id: number,
    image: string,
    is_deleted: boolean
}

export interface Screenshots {
    count: number,
    results: Screenshot[]
}
