import './App.css'
import Nav from './components/Nav'
import GamesGrid from './components/GamesGrid'
import Aside from './components/Aside'
import QrCodeBtn from './components/QrCodeBtn'


function App() {

  return (
    <div className='bg-white text-dark dark:bg-dark dark:text-white transition-all pb-5'>
      <div className="container mx-auto ">
        <div className="grid grid-rows-[auto_1fr] grid-cols-6 min-h-screen">
          <Nav/>

          <div className="hidden md:block col-span-1 px-5 py-5 md:py-8">
            <Aside />
          </div>

          <div className="col-span-6 md:col-span-5 px-5 py-5 md:py-8">
            <GamesGrid />
          </div>
        </div>
      </div>
      <QrCodeBtn />
    </div>
  )
}

export default App
