import genreService, { Genre} from '../services/genre-service'
import useData from './useData'

const useGenres = () => {
    return useData<Genre>(genreService)
}

export default useGenres