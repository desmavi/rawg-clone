import { useEffect, useState } from 'react'
import { Entity } from '../services/https-request'
import { CanceledError, AxiosResponse  } from 'axios'

interface GetResponse<T> {
    count: number;
    results: T[];
}

interface HttpService {
    getAll<T>(filter?:number): {
        request: Promise<AxiosResponse<GetResponse<T>>>;
        cancel: () => void;
    };
    delete(id: number): Promise<AxiosResponse<any>>;
    create<T>(entity: T): Promise<AxiosResponse<T>>;
    update<T extends Entity>(entity: T): Promise<AxiosResponse<T>>;
}

function useData<T>(service: HttpService, filter?: number | null) {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const { request, cancel } = filter ? service.getAll<T>(filter) : service.getAll<T>()

        request
            .then((res) => {
                setData(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })

        return () => cancel()
    }, (filter || filter === null) ? [filter] : [])

    return { data, error, isLoading }
}

export default useData