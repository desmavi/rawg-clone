import './App.css'
import Nav from './components/Nav'

function App() {
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
              MAIN
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
