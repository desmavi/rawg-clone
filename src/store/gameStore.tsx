import { create } from 'zustand'

interface QueryObjectProps {
    genre: number | null,
    platform: number | null,
    ordering: string | null,
    search: string
}

interface GameStoreProps {
    queryObject: QueryObjectProps,
    handleQueryObject: (value: number | null | string, name: string ) => void
}

const useGameStore = create<GameStoreProps>((set) => ({
    queryObject: {
        genre: null,
        platform: null,
        ordering: null,
        search: ''
    },
    handleQueryObject: (value: number | null | string, name: string ) => set(state => ({
            queryObject: {
                ...state.queryObject,
                [name]: value
            }
        })
    )
}))

export default useGameStore