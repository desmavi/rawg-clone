import gameService, { Game } from '../services/game-service'
import { buildParamsObj } from '../utils/misc' 
import { CACHE_KEY_GAMES } from '../utils/const'
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query'
import { GetResponse } from '../services/api-client'

export interface FilterProps {
    genres: number | null,
    parent_platforms: number | null
    ordering: string | null
    search?: string 
}

export interface Props {
    pageParams: number[]
    pages: [GetResponse<Game>]
}

const useGames = (filters? : FilterProps) => {

    const dependenciesKey = [filters?.genres, filters?.parent_platforms, filters?.ordering, filters?.search].filter(dep => dep != null && dep !== "");

    const params = filters ? buildParamsObj<FilterProps>(filters)  : filters;

    function fetchGames(page: number){
        return gameService.getAll<GetResponse<Game>>({
            params: {
                ...params,
                page
            },
        })
    }

    const infiniteQuery = useInfiniteQuery<GetResponse<Game>, Error>({
        queryKey: [ ...CACHE_KEY_GAMES, ...dependenciesKey],
        queryFn: ({ pageParam }) => fetchGames(pageParam as number),
        initialPageParam:1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        placeholderData: keepPreviousData
    })

    return infiniteQuery

}

export default useGames