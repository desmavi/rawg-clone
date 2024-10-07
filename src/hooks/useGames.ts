import gameService, { Game } from '../services/game-service'
import useData from './useData'

const useGames = () => {
    return useData<Game>(gameService)

}

export default useGames