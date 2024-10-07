import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import GamesGrid from './components/GamesGrid'
import Aside from './components/Aside'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<number | null >(null)

  function handleSelectGenre(id: number | null){
    setSelectedGenre(id)
  }
  
  return (
    <div className='bg-white text-dark dark:bg-dark dark:text-white transition-all'>
      <div className="container mx-auto ">
        <div className="grid grid-rows-[auto_1fr] grid-cols-6 min-h-screen">
          {/* HEADER */}
          <Nav />

          {/* ASIDE */}
          <div className="hidden md:block col-span-1 px-5 py-8">
            <Aside selectedGenre={selectedGenre} onSelectGenre={handleSelectGenre}/>
          </div>

          {/* MAIN */}
          <div className="col-span-6 md:col-span-5 px-5 py-8">
            <GamesGrid selectedGenre={selectedGenre} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
