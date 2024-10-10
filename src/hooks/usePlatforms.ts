import { keepPreviousData, useQuery } from '@tanstack/react-query'
import platformService, { Platform } from '../services/platform-service'
import { CACHE_KEY_PLATFORMS } from '../utils/const'
import { GetResponse } from '../services/api-client'

const usePlatforms = () => {

    const { data, error, isLoading } = useQuery({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: () => platformService.getAll<GetResponse<Platform>>(),
        placeholderData: keepPreviousData,
        staleTime: 24 * 60 * 60 * 1000 //24h

    })
    return { data, error, isLoading }
}

export default usePlatforms