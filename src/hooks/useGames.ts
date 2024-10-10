import gameService, { Game } from '../services/game-service'
import { buildParamsObj } from '../utils/misc' 
import { CACHE_KEY_GAMES } from '../utils/const'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { GetResponse } from '../services/api-client'

export interface FilterProps {
    genres: number | null,
    parent_platforms: number | null
    ordering: string | null
    search?: string 
}

const useGames = (filters? : FilterProps) => {

    const dependenciesKey = [filters?.genres, filters?.parent_platforms, filters?.ordering, filters?.search].filter(dep => dep != null && dep !== "");

    const params = filters ? buildParamsObj<FilterProps>(filters)  : filters;

    const { data, error, isLoading, isFetching} = useQuery<GetResponse<Game>, Error>({
        queryKey: [ ...CACHE_KEY_GAMES, ...dependenciesKey],
        queryFn: () =>  gameService.getAll<GetResponse<Game>>({
            params: params
        }),
        placeholderData: keepPreviousData
    })

    return {
            data, 
            error, 
            isLoading, 
            isFetching 
    } 

}

export default useGames