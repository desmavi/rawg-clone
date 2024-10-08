import gameService, { Game } from '../services/game-service'
import useData from './useData'

export interface FilterProps {
    genres: number | null,
    parent_platforms: number | null
}

const useGames = (filters? : FilterProps) => {
    return useData<Game>(gameService, filters)

}

export default useGames