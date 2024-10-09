import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import GamesGrid from './components/GamesGrid'
import Aside from './components/Aside'
import QrCodeBtn from './components/QrCodeBtn'

export interface QueryObjectProps {
  genre: number | null,
  platform: number | null,
  ordering: string | null,
  search: string
}

function App() {

  const [queryObject, setQueryObject] = useState<QueryObjectProps>({
    genre: null,
    platform: null,
    ordering: null,
    search: ''
  })

  function handleQueryObject(value:number | null | string, name:string){
    setQueryObject(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  
  return (
    <div className='bg-white text-dark dark:bg-dark dark:text-white transition-all pb-5'>
      <div className="container mx-auto ">
        <div className="grid grid-rows-[auto_1fr] grid-cols-6 min-h-screen">
          <Nav search={queryObject.search} onSearch={handleQueryObject}/>

          <div className="hidden md:block col-span-1 px-5 py-5 md:py-8">
            <Aside genre={queryObject.genre} onSelectGenre={handleQueryObject}/>
          </div>

          <div className="col-span-6 md:col-span-5 px-5 py-5 md:py-8">
            <GamesGrid queryObject={queryObject} onChangeQuery={handleQueryObject} />
          </div>
        </div>
      </div>
      <QrCodeBtn />
    </div>
  )
}

export default App
