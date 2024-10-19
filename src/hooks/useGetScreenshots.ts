import { useQuery } from '@tanstack/react-query'
import {  Screenshots } from '../services/screenshots-service'
import { HttpService } from '../services/https-request'

function useGetScreenshots(gameId: number) {

    const screenshotsService = new HttpService(`/games/${gameId}/screenshots`)

    const {data, isLoading, error, isFetching} = useQuery({
        queryKey: ['screenshots', gameId ],
        queryFn: () => screenshotsService.getAll<Screenshots>(),
        staleTime: 24 * 60 * 60 * 1000 //24h
    })

    return { data, isLoading, error, isFetching }


}

export default useGetScreenshots