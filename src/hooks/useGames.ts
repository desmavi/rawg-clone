import { useEffect, useState } from 'react'
import gameService, {GameList, Game} from '../services/game-service'
import ErrorProps from '../type/request'
import { CanceledError } from 'axios'

const useGames = () => {

    const [games, setGames] = useState<Game[]>([])

    const [error, setError] = useState<ErrorProps>({
        message: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const { request, cancel } = gameService.getAll<GameList>()
        request
            .then((res) => {
                setGames(res.data.results)
            })
            .catch(err => {
                if(err instanceof CanceledError) return
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
        
        return () => cancel()
    }, []) 


    return { games, error, isLoading, setGames, setError}

}

export default useGames