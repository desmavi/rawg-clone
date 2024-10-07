import React from 'react'
import useGames from '../hooks/useGames'
import { Game} from '../services/game-service'
import GameCard from './GameCard'

function GamesGrid() {

    const { games, error, isLoading, setError, setGames} = useGames()
    console.log(games, 'data')

    return (
        <div>
            { error.message && <p>{error.message}</p> }
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {
                        games?.map(( el : Game) => {
                            return <GameCard key={el.id} item={el} />
                        })
                    } 
                </div>
        </div>
    )
}

export default GamesGrid



