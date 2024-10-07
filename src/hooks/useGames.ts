import { useEffect, useState } from 'react'
import gameService, {GameList, Game} from '../services/game-service'
import ErrorProps from '../type/request'

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
                setIsLoading(false)
                setError({
                    message:''
                })
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
        
        return () => cancel()
    }, []) 


    return { games, error, isLoading, setGames, setError}

}

export default useGames