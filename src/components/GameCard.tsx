import React from 'react'
import { getRating } from '../utils/gameCard'
import { Game } from '../services/game-service'

interface GameCardProps {
    item: Game
}

function GameCard({ item } : GameCardProps) {
    return (
        <div key={item.id} 
            className='border-[1px] dark:bg-mediumDark dark:border-0 rounded-3xl overflow-hidden'>
                <div className='w-full'>
                    <img 
                        src={item.background_image} 
                        className='object-cover w-full h-70 md:h-40'/>
                </div>
                <div className='p-5 '>
                    <div className='flex gap-2'>
                        {/* {item.platforms.map(el => {
                            return <img key={el.platform.id} src={el.platform.image_background} alt={el.platform.name} />
                        } )} */}
                    </div>
                    <p className="text-2xl font-bold">{item.name} {getRating(item.ratings)}</p>
                </div>
        </div>
    )
}

export default GameCard