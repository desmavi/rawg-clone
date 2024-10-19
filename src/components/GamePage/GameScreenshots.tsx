import useGetScreenshots from "../../hooks/useGetScreenshots"

function GameScreenshots({ id } : { id: number }) {

    const {data: screenshots, error, isFetching} = useGetScreenshots(id)

    if(error) return

    return (
        <div className="grid lg:grid-cols-2 gap-4">
            {
                screenshots?.results.map(image => {
                    return isFetching?
                    <div className="skeleton rounded-md md:h-40 lg:h-50 w-full"></div> :
                    <img key={image.id} src={image.image} className="object-cover rounded-md md:h-40 lg:h-50 w-full" />

                })
            }
        </div>
    )
}

export default GameScreenshots