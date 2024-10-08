import useGames from '../hooks/useGames'
import { Game} from '../services/game-service'
import GameCard from './GameCard'
import FilterBar from './FilterBar'
import { QueryObjectProps } from '../App'

export interface Query {
    queryObject: QueryObjectProps,
    onChangeQuery: (value:number | null | string, name:string) => void
}

function GamesGrid( { queryObject, onChangeQuery } : Query) {

    const { data : games, error, isLoading} = useGames({ genres: queryObject.genre, 
                                                        parent_platforms: queryObject.platform,
                                                        ordering: queryObject.ordering,
                                                        search: queryObject.search
                                                    })
    return (
        <div>
            <FilterBar onChangeQuery={onChangeQuery} />
            { error && <p>{error}</p> }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    games.length > 0 &&
                        games.map(( el : Game) => {
                            return <GameCard key={el.id} item={el} isLoading={isLoading} />
                        })
                        
                } 

                {
                    (games.length == 0 && (queryObject.genre || queryObject.platform)) &&
                    <p>No match found</p>
                }
            </div>
        </div>
    )
}

export default GamesGrid



