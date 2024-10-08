import { useState } from 'react'
import useGames from '../hooks/useGames'
import { Game} from '../services/game-service'
import GameCard from './GameCard'
import FilterBar from './FilterBar'

interface GamesGrid {
    selectedGenre: number | null
}

function GamesGrid( { selectedGenre } : GamesGrid) {

    const [selectedPlatform, setSelectedPlatform ] = useState<number | null>(null)

    function handleSelectPlatform(id: number | null){
        setSelectedPlatform(id)
      }

    const { data : games, error, isLoading} = useGames({ genres: selectedGenre, 
                                                        parent_platforms: selectedPlatform
                                                    })
    return (
        <div>
            <FilterBar onSelectPlatform={handleSelectPlatform} />
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



