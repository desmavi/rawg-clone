import platformService, { Platform } from '../services/platform-service'
import useData from './useData'
import { FilterProps } from './useGames'

const usePlatforms = () => {
    return useData<Platform>(platformService)
}

export default usePlatforms