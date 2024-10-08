import platformService, { Platform } from '../services/platform-service'
import useData from './useData'

const usePlatforms = () => {
    return useData<Platform>(platformService)
}

export default usePlatforms