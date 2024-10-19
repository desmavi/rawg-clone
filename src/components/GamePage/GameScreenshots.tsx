import useGetScreenshots from "../../hooks/useGetScreenshots"

function GameScreenshots({ id } : { id: number }) {

    const {data: screenshots, error} = useGetScreenshots(id)

    if(error) return

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
            {
                screenshots?.results.map(image => {
                    return <img key={image.id} src={image.image} className="object-cover rounded-md h-40 lg:h-50 w-full" />

                })
            }
        </div>
    )
}

export default GameScreenshots