import { useParams } from 'react-router'
import useFindGameBySlug from '../hooks/useFindGameBySlug'

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
        <div className='px-6 py-8 '>
            <h2 className='text-3xl font-bold mb-5'>{game?.name}</h2>
            <p>{game?.description_raw}</p>
        </div>
    )
}

export default GamePage