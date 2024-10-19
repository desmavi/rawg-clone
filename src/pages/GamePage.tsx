import { useParams } from 'react-router'
import useFindGameBySlug from '../hooks/useFindGameBySlug'
import GameDescription from '../components/GamePage/GameDescription'
import GameAttributes from '../components/GamePage/GameAttributes'
import GameScreenshots from '../components/GamePage/GameScreenshots'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

function GamePage() {

    const { slug } = useParams()

    const { data: game, isLoading, error } = useFindGameBySlug(slug)


    if(isLoading){
        return <div className=" col-span-6 flex items-center justify-center my-10">
            <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
    }

    if(error){
        {error && <p>{error.message}</p>}
    }


    return (
        <>
            <div className='col-span-6 px-6 py-8 '>
                <Link to="/" className='text-sm flex gap-2 items-center mb-2 hover:underline' >               
                    <BiArrowBack /> Back
                </Link>

                <div className='grid lg:grid-cols-2 gap-8'>
                    <div>
                        <h2 className='text-3xl font-bold mb-5'>{game?.name}</h2>
                        <GameDescription text={game?.description_raw || ''} />
                        <GameAttributes game={game!} />
                    </div>
                    <div>
                        <GameScreenshots id={game?.id || 0}  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GamePage