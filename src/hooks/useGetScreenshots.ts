import { useQuery } from '@tanstack/react-query'
import { getScreenshots, Screenshots } from '../services/screenshots-service'

function useGetScreenshots(id: number) {

    const {data, isLoading, error} = useQuery({
        queryKey: ['screenshots', id ],
        queryFn: () => getScreenshots<Screenshots>(id)
    })

    return { data, isLoading, error }


}

export default useGetScreenshots