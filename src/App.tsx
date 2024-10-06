import './App.css'

function App() {

  return (
    <div className="container mx-auto ">
      <div className="grid grid-rows-[auto_1fr] grid-cols-6 min-h-screen">
        {/* HEADER */}
        <div className="col-span-6 p-5">
          HEADER
        </div>

        {/* NAV */}
        <div className="hidden md:block col-span-1 p-5">
          NAV
        </div>

        {/* MAIN */}
        <div className="col-span-6 md:col-span-5 p-5">
            MAIN
        </div>
      </div>
    </div>
  )
}

export default App
