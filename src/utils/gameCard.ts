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

export function getScoreColor(score:number){
    if(score >= 90){
        return "bg-green-200"
    } else if (score < 90 && score > 50 ) {
        return "bg-yellow-200"
    } else {
        return "bg-red-200"
    }
}

export function optimizeImageUrl ( url: string){
    let dataForOptimization = "/crop/600/400"
    let index = (url.indexOf("media/") + 'media/'.length) - 1
    let leftSideUrl = url.slice(0, index)
    let rightSideUrl = url.slice(index)
    let outputUrl = leftSideUrl + dataForOptimization + rightSideUrl
    return outputUrl 
}
