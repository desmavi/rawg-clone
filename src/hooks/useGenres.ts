import { useEffect, useState } from 'react'
import genreService, { GenresList, Genre} from '../services/genre-service'
import { CanceledError } from 'axios'

const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState({
        message: ""
    })
    const[isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        const { request, cancel } = genreService.getAll<GenresList>()

        request
        .then(res => {
            setGenres(res.data.results)
        })
        .catch(err => {
            if(err instanceof CanceledError) return
            setError({
                message: err.message
            })
        })
        .finally(() => {
            setIsLoading(false)
        })

        return () => cancel()
    }, [])

    return { genres, error, isLoading}
}

export default useGenres