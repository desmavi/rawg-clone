import { useParams } from 'react-router'

function GamePage() {

    const { id } = useParams()

    return (
        <div>GamePage {id}</div>
    )
}

export default GamePage