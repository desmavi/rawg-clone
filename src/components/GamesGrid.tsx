import useGames, { Props } from '../hooks/useGames'
import { Game} from '../services/game-service'
import GameCard from './GameCard'
import FilterBar from './FilterBar'
import { QueryObjectProps } from '../App'
import MobileWrapperAside from './MobileWrapperAside'
import { Fragment } from 'react/jsx-runtime'
import InfiniteScroll from 'react-infinite-scroll-component'

export interface Query {
    queryObject: QueryObjectProps,
    onChangeQuery: (value:number | null | string, name:string) => void
}

function GamesGrid( { queryObject, onChangeQuery } : Query) {

    const { data : games , error, isLoading, fetchNextPage, hasNextPage } = useGames({ 
        genres: queryObject.genre, 
        parent_platforms: queryObject.platform,
        ordering: queryObject.ordering,
        search: queryObject.search
    })

    if(error) return <p>{error.message}</p>


    const dataSize: number = games?.pages.flatMap(page => page.results).length || 0

    console.log(hasNextPage, dataSize)



    return (
        <div>
            <div className='flex justify-between items-center mb-8'>
                <p className='text-3xl md:text-5xl'>Games</p>
                <MobileWrapperAside genre={queryObject.genre} onSelectGenre={onChangeQuery}/>
            </div>
            <FilterBar onChangeQuery={onChangeQuery} queryObject={queryObject} />
            {games && <InfiniteScroll
                dataLength={dataSize}
                next={fetchNextPage}
                hasMore={!!hasNextPage}
                loader={<div className="flex items-center justify-center my-10">
                    <span className="loading loading-dots loading-lg"></span>
                </div>}
                endMessage={
                        (games?.pages?.[0]?.results.length === 0 && (queryObject.genre || queryObject.platform || queryObject.search)) ?
                        <div className="flex items-center justify-center my-10">
                            <p className='font-semibold'>No match found 😕 </p> 
                        </div> :
                        <div className={`flex items-center justify-center my-10 ${!games && "hidden"}`}>
                            <p className='font-semibold'>Yay! You have seen it all 🎉
                            </p>
                        </div>
                    
                }
                >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {games?.pages.map((page, index) => (
                        <Fragment key={index}>
                            {page?.results?.map(( el : Game) => {
                                    return <GameCard key={el.id} item={el} isLoading={isLoading} />
                                })}
                        </Fragment>
                    ))}
                    
                </div>
            </InfiniteScroll>}
            {
                !games && <div className="flex items-center justify-center my-10">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
            }


        </div>
    )
}

export default GamesGrid



