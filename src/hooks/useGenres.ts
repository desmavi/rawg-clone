import genreService, { Genre} from '../services/genre-service'
import { CACHE_KEY_GENRES } from '../utils/const'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { GetResponse } from '../services/api-client'


const useGenres = () => {

    const { data, error, isLoading, isFetching} = useQuery({
        queryKey: CACHE_KEY_GENRES,
        queryFn: () =>  genreService.getAll<GetResponse<Genre>>(),
        placeholderData: keepPreviousData,
        staleTime: 24 * 60 * 60 * 1000 //24h
    })

    return { 
        data , 
        error, 
        isLoading, 
        isFetching
    }
}

export default useGenres