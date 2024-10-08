import { getScoreColor } from "../utils/gameCard"

interface ScoreProps {
    metacritic: number
}

function ScoreElement({ metacritic } : ScoreProps ) {

    if(!metacritic) return
    
    return (
        <div className={`badge rounded-sm ${getScoreColor(metacritic)}`}>
            {metacritic}
        </div>
    )
}

export default ScoreElement