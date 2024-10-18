import useGames from '../hooks/useGames'
import { Game} from '../services/game-service'
import GameCard from './GameCard'
import FilterBar from './FilterBar'
import MobileWrapperAside from './MobileWrapperAside'
import { Fragment } from 'react/jsx-runtime'
import InfiniteScroll from 'react-infinite-scroll-component'
import useGameStore from '../store/gameStore'
import { Link } from 'react-router-dom'

function GamesGrid( ) {

    const { queryObject } = useGameStore()
    const { data : games , error, isLoading, fetchNextPage, hasNextPage } = useGames({ 
        genres: queryObject.genre, 
        parent_platforms: queryObject.platform,
        ordering: queryObject.ordering,
        search: queryObject.search
    })

    if(error) return <p>{error.message}</p>

    const dataSize: number = games?.pages.flatMap(page => page.results).length || 0


    return (
        <div>
            <div className='flex justify-between items-center mb-8 px-2'>
                <p className='text-3xl md:text-5xl'>Games</p>
                <MobileWrapperAside/>
            </div>
            <FilterBar />
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2'>
                    {games?.pages.map((page, index) => (
                        <Fragment key={index}>
                            {page?.results?.map(( el : Game) => {
                                    return <Link key={el.id}  
                                    to={`games/${el.slug}`}
                                    className='block
                                    border-2 bg-transparent dark:bg-mediumDark dark:border-0 rounded-3xl overflow-hidden 
                                    scale-100 hover:scale-105 transition-all 
                                    cursor-pointer
                                    '>
                                        <GameCard item={el} isLoading={isLoading} />
                                    </Link>
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



