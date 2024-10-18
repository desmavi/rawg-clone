import { GameObjectProps } from '../services/game-service'
import GameAttribute from './GameAttribute'
import ScoreElement from './ScoreElement'

interface GameAttributesProps {
    game: GameObjectProps
}

function GameAttributes({ game }:GameAttributesProps) {
  return (
    <div className='my-5 grid grid-cols-1 md:grid-cols-2'>
                <GameAttribute attribute='Platforms'>
                    {
                        game?.parent_platforms.map(platform => {
                            return <p>{platform.platform.name}</p>
                        })
                    }
                </GameAttribute>
                <GameAttribute attribute='Metascore'>
                    <ScoreElement metacritic={game?.metacritic || 0} />
                </GameAttribute>
                <GameAttribute attribute='Genres'>
                    {
                        game?.genres.map(genre => {
                            return <p>{genre.name}</p>
                        })
                    }
                </GameAttribute>
                <GameAttribute attribute='Genres'>
                    {
                        game?.publishers.map(publisher => {
                            return <p>{publisher.name}</p>
                        })
                    }
                </GameAttribute>
            </div>
  )
}

export default GameAttributes