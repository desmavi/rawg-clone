import useGenres from '../hooks/useGenres'

interface AsideProps {
    onSelectGenre: (id: number | null) => void,
    selectedGenre: number | null
}

function Aside({ onSelectGenre, selectedGenre } : AsideProps) {
    const { genres, error, isLoading } = useGenres()

    return (
        <div>
            <p className='text-lg font-bold mb-1'>Genres</p>
            <small className="badge border-1 border-slate-500 dark:border-0 cursor-pointer mb-5"  onClick={() => onSelectGenre(null)}>Clear</small>
            {error.message && <p>{error.message}</p>}
            {
                genres.map(el => {
                    return isLoading?
                    <div key={el.id} className="skeleton h-2 mb-3"></div>:
                    <p  key={el.id} 
                        className={`${ (selectedGenre == el.id) && "underline" }
                            cursor-pointer 
                            mb-2
                        `}
                        onClick={() => onSelectGenre(el.id)}
                        tabIndex={0}
                    >
                        {el.name}
                    </p>
                })
            }
        </div>
    )
}

export default Aside