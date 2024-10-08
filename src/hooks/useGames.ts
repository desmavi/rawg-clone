import gameService, { Game } from '../services/game-service'
import useData from './useData'

const useGames = (filter?: number | null) => {
    return useData<Game>(gameService, filter)

}

export default useGames