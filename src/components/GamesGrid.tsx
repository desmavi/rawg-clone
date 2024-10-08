import useGames from '../hooks/useGames'
import { Game} from '../services/game-service'
import GameCard from './GameCard'


interface GamesGrid {
    selectedGenre: number | null
}

function GamesGrid( { selectedGenre } : GamesGrid) {

    const { data : games, error, isLoading} = useGames(selectedGenre)

    return (
        <div>
            { error && <p>{error}</p> }
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {
                        games.length > 0 &&
                            games.map(( el : Game) => {
                                return <GameCard key={el.id} item={el} isLoading={isLoading} />
                            })
                            
                    } 

                    {
                        (games.length == 0 && selectedGenre) &&
                        <p>No match found</p>
                    }
                </div>
        </div>
    )
}

export default GamesGrid



