import { useQuery } from '@tanstack/react-query'
import gameService from '../services/game-service'
import { GameObjectProps } from '../services/game-service'

function useFindGameBySlug(slug: string | undefined) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['game', slug],
        queryFn: () => gameService.getOne<GameObjectProps>(slug),
        staleTime: 24 * 60 * 60 * 1000 //24h

    })

    return { data, isLoading, error}
}

export default useFindGameBySlug