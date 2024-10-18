import  { ReactNode } from 'react'
import QrCodeBtn from './QrCodeBtn'

interface ContainerProps {
    children: ReactNode; 
}

function Container({ children }: ContainerProps) {
    return (
        <div className='bg-white text-dark dark:bg-dark dark:text-white transition-all pb-5'>
                <div className="container mx-auto ">
                    <div className="grid grid-rows-[auto_1fr] min-h-screen">
                        { children }
                    </div>
                </div>
                <QrCodeBtn />
            </div>
    )
}

export default Container