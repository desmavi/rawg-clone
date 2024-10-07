import { useEffect, useState } from 'react'
import { Entity } from '../services/https-request'
import { CanceledError, AxiosResponse  } from 'axios'

interface GetResponse<T> {
    count: number;
    results: T[];
}

interface HttpService {
    getAll<T>(): {
        request: Promise<AxiosResponse<GetResponse<T>>>;
        cancel: () => void;
    };
    delete(id: number): Promise<AxiosResponse<any>>;
    create<T>(entity: T): Promise<AxiosResponse<T>>;
    update<T extends Entity>(entity: T): Promise<AxiosResponse<T>>;
}

function useData<T>(service: HttpService) {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const { request, cancel } = service.getAll<T>()

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
    }, [])

    return { data, error, isLoading }
}

export default useData