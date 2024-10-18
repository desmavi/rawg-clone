import { getRating, optimizeImageUrl } from '../utils/gameCard'
import { Game } from '../services/game-service'
import PlatformIconsList from './PlatformIconsList'
import ScoreElement from './ScoreElement'


interface GameCardProps {
    item: Game,
    isLoading: boolean
}

function GameCard({ item, isLoading } : GameCardProps) {
    return (
        <>
            {
                isLoading ?
                <div className="skeleton h-72 rounded-3xl"></div> :
                <div key={item.id} 
                    className='
                    border-2 bg-transparent dark:bg-mediumDark dark:border-0 rounded-3xl overflow-hidden 
                    scale-100 hover:scale-105 transition-all 
                    cursor-pointer
                    '
                >
                    <div className='w-full'>
                        <img 
                            src={optimizeImageUrl(item.background_image)} 
                            className='object-cover w-full h-70 md:h-40'
                            alt={item.name}
                        />
                    </div>
                    <div className='p-5'>
                        <div className='flex items-center justify-between mb-4'>
                            <PlatformIconsList parent_platforms={item.parent_platforms} />
                            <ScoreElement metacritic={item.metacritic} />
                        </div>
                        <p className="text-2xl font-bold mb-2">{item.name} {getRating(item.ratings)}</p>
                    </div>
                </div> 
            }
        </>

    )
}

export default GameCard