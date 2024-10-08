import api from "./api-client";
import { FilterProps } from "../hooks/useGames";

export interface Entity {
    id: number
}

class HttpService {
    endpoint: string;

    constructor(endpoint:string){
        this.endpoint = endpoint
    }

    getAll<T>(filters?: FilterProps){
        const controller = new AbortController();
        const request = api.get<T>(this.endpoint, {
            signal: controller.signal,
            params: filters
        });
        return { request, cancel: () => controller.abort()};
    }

    delete(id:number){
        return api.delete(this.endpoint + '/' + id)
    }

    create<T>(entity: T){
        return api.post(this.endpoint, entity);
    }

    update<T extends Entity>(entity:T){
        return api.put(this.endpoint + '/' + entity.id, entity)
    }
}

function createRequest(endpoint:string){
    return new HttpService(endpoint)
}

export default createRequest