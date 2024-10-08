import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import GamesGrid from './components/GamesGrid'
import Aside from './components/Aside'

export interface QueryObjectProps {
  genre: number | null
  platform: number | null
}

function App() {

  const [queryObject, setQueryObject] = useState<QueryObjectProps>({
    genre: null,
    platform: null
  })

  function handleQueryObject(value:number | null, name:string){
    setQueryObject(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  
  return (
    <div className='bg-white text-dark dark:bg-dark dark:text-white transition-all'>
      <div className="container mx-auto ">
        <div className="grid grid-rows-[auto_1fr] grid-cols-6 min-h-screen">
          {/* HEADER */}
          <Nav />

          {/* ASIDE */}
          <div className="hidden md:block col-span-1 px-5 py-8">
            <Aside genre={queryObject.genre} onSelectGenre={handleQueryObject}/>
          </div>

          {/* MAIN */}
          <div className="col-span-6 md:col-span-5 px-5 py-8">
            <GamesGrid queryObject={queryObject} onChangeQuery={handleQueryObject} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
