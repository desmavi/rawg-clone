import { ReactNode } from "react"

interface GameAttributeProps {
    children: ReactNode,
    attribute: string
}


function GameAttribute({attribute, children}: GameAttributeProps) {
    return (
        <div className='my-5'>
        <div>
            <p className='opacity-70 font-medium mb-1'>{attribute}</p>
            <div>
                {children}
            </div>
        </div>
    </div>
    )
}

export default GameAttribute