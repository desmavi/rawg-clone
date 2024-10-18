import useGenres from "../hooks/useGenres"
import useGameStore from "../store/gameStore"


function Aside() {

    const { data : genres, error, isLoading } = useGenres()
    const { queryObject, handleQueryObject } = useGameStore()

    return (
        <div>
            <p className='text-lg font-bold mb-1'>Genres</p>
            {
                !genres && <div className="flex items-center justify-center my-10">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
            }
            {genres && <small
                className="badge border-1 border-slate-500 cursor-pointer mb-5"  
                onClick={() => handleQueryObject(null, "genre")}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleQueryObject(null, "genre")
                    }
                }
            >
                    Clear
            </small>}
            {error && <p>{error.message}</p>}
            {
                genres?.results.map((el) => {
                    return isLoading?
                    <div key={el.id} className="skeleton h-2 mb-3"></div>:
                    <p  key={el.id} 
                        className={`${ (queryObject.genre == el.id) && "underline" }
                            cursor-pointer 
                            mb-2
                            hover:underline
                            transition-all
                        `}
                        onClick={() => handleQueryObject(el.id, "genre")}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter")
                                handleQueryObject(el.id, "genre")
                            }
                        }
                    >
                        {el.name}
                    </p>
                })
            }
        </div>
    )
}

export default Aside