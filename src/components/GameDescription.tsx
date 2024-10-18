import { useState } from 'react'
import { truncateText } from '../utils/misc'

const CHAR_MAX_LENGTH = 400

interface DescriptionProps {
    text: string
}

function GameDescription({ text } : DescriptionProps) {
    const [ isExpanded, setIsExpanded ] = useState(false)

    if( text.length < CHAR_MAX_LENGTH ){
        return  <div>
            <p>{text}</p>
        </div>
    }

    return (
        <div>
            <p className='mb-3'>{truncateText(text, isExpanded)}</p>
            <button 
                className='py-1 px-2 text-sm font-medium
                    bg-yellow-300 text-dark rounded-md
                    hover:bg-yellow-400 transition-all'
                onClick={() => setIsExpanded(!isExpanded)}
            >
                { isExpanded ? 'Show less' : 'Show more'}
            </button>
        </div>
    )
}

export default GameDescription