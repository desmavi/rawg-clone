
interface ItemProp {
    id: number
}

function useFindItem<T extends ItemProp>(items : T[], id : number ) : T | undefined {
    const item = items.find(el => el.id === id)
    return item
}

export default useFindItem