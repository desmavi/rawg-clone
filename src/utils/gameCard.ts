import { Ratings } from "../services/game-service"

export function getRating(ratings: Ratings[]){
    let topVoted = ratings[0]

    ratings.forEach(el => {
        if(el.count > topVoted.count){
            topVoted = el
        }
    })

    if(topVoted.title == "exceptional"){
        return "🎯"
    } else if (topVoted.title == "recommended"){
        return "👍🏻"
    } else if (topVoted.title == "meh"){
        return "😑"
    } else if (topVoted.title == "skip"){
        return "⛔️"
    }
}