import useGenres from "../hooks/useGenres"

export interface AsideProps {
    onSelectGenre: (value: number | null, name: string) => void,
    genre: number | null
}

function Aside({ onSelectGenre, genre } : AsideProps) {

    const { data : genres, error, isLoading } = useGenres()
    
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
                onClick={() => onSelectGenre(null, "genre")}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        onSelectGenre(null, "genre")
                    }
                }
            >
                    Clear
            </small>}
            {error&& <p>{error.message}</p>}
            {
                genres?.results.map((el) => {
                    return isLoading?
                    <div key={el.id} className="skeleton h-2 mb-3"></div>:
                    <p  key={el.id} 
                        className={`${ (genre == el.id) && "underline" }
                            cursor-pointer 
                            mb-2
                            hover:underline
                            transition-all
                        `}
                        onClick={() => onSelectGenre(el.id, "genre")}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter")
                                onSelectGenre(el.id, "genre")
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