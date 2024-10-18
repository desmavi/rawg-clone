import api from "./api-client";
import { AxiosRequestConfig } from "axios";

export interface Entity {
    id: number
}


class HttpService {
    endpoint: string;

    constructor(endpoint:string){
        this.endpoint = endpoint
    }

    getAll<T>(filters?: AxiosRequestConfig){
        const request = api.get<T>(this.endpoint, {
                params: filters?.params
            })
            .then(res => res.data)
        return request
    }

    getOne<T>(slug: string | undefined){
        const request = api.get<T>(this.endpoint + '/' + slug )
            .then(res => res.data)

        return request

    }

    delete(id:number){
        return api.delete(this.endpoint + '/' + id)
    }

    create<T>(entity: T){
        return api.post(this.endpoint, entity)
    }

    update<T extends Entity>(entity:T){
        return api.put(this.endpoint + '/' + entity.id, entity)
    }
}

function createRequest(endpoint:string){
    return new HttpService(endpoint)
}

export default createRequest