import { useQuery } from '@tanstack/react-query'
import gameService from '../services/game-service'
import { GameObjectProps } from '../services/game-service'

function useFindGameBySlug(slug: string | undefined) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['game', slug],
        queryFn: () => gameService.getOne<GameObjectProps>(slug)
    })

    return { data, isLoading, error}
}

export default useFindGameBySlug