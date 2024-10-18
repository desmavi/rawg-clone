import { useParams } from 'react-router'
import useFindGameBySlug from '../hooks/useFindGameBySlug'
import GameDescription from '../components/GameDescription'
import GameAttributes from '../components/GameAttributes'

function GamePage() {

    const { slug } = useParams()

    const { data: game, isLoading, error } = useFindGameBySlug(slug)

    if(isLoading){
        return <div className="flex items-center justify-center my-10">
            <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
    }

    if(error){
        {error && <p>{error.message}</p>}
    }

    return (
        <div className='col-span-6 px-6 py-8 '>
            <h2 className='text-3xl font-bold mb-5'>{game?.name}</h2>
            <GameDescription text={game?.description_raw || ''} />
            <GameAttributes game={game!} />
        </div>
    )
}

export default GamePage