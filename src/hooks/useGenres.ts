import genreService, { Genre} from '../services/genre-service'
import useData from './useData'

const useGenres = (filter?: number | null) => {
    return useData<Genre>(genreService, filter)
}

export default useGenres