import Aside from '../components/Aside'
import GamesGrid from '../components/GamesGrid'

function Dashboard() {
    return (
        <>
            <div className="hidden md:block col-span-1 px-5 py-5 md:py-8">
                <Aside />
            </div>

            <div className="col-span-6 md:col-span-5 px-5 py-5 md:py-8">
                <GamesGrid />
            </div>
        </>
    )
}

export default Dashboard