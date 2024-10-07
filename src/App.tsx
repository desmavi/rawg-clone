import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import useGames from './hooks/useGames'

function App() {
  
  const { games, error, isLoading, setError, setGames} = useGames()

  return (
    <div className='bg-white text-dark dark:bg-dark dark:text-white'>
      <div className="container mx-auto ">
        <div className="grid grid-rows-[auto_1fr] grid-cols-6 min-h-screen">
          {/* HEADER */}
          <Nav />

          {/* ASIDE */}
          <div className="hidden md:block col-span-1 p-5">
            ASIDE
          </div>

          {/* MAIN */}
          <div className="col-span-6 md:col-span-5 p-5">
            {error.message && <p>{error.message}</p>}
              <ul>
                {
                  games?.results?.map((el) => {
                    return <li key={el.id}>{el.name}</li>
                  })
                } 
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
