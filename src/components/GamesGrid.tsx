import useGames from '../hooks/useGames'
import { Game} from '../services/game-service'
import GameCard from './GameCard'

interface GamesGrid {
    selectedGenre: number | null
}

function GamesGrid( { selectedGenre } : GamesGrid) {

    const { games, error, isLoading} = useGames()

    const filterGamesByGenre = selectedGenre 
    ? games.filter(game => {
        // Verifica se almeno un genere del gioco ha un id che corrisponde a selectedGenre
        return game.genres.some(genre => genre.id === selectedGenre);
    }) 
    : games;

    return (
        <div>
            { error.message && <p>{error.message}</p> }
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {
                        filterGamesByGenre.length > 0 &&
                            filterGamesByGenre.map(( el : Game) => {
                                return <GameCard key={el.id} item={el} isLoading={isLoading} />
                            })
                            
                    } 

                    {
                        (filterGamesByGenre.length == 0 && selectedGenre) &&
                        <p>No match found</p>
                    }
                </div>
        </div>
    )
}

export default GamesGrid



