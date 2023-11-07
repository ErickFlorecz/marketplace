// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        {/* <div className="flex justify-center">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
        </div> */}
      <div className="text-right">
      <h1 className='font-bold'>IndustryXTrade</h1>
      <p>powered by <strong>Alfil Tecnologia</strong></p>
      </div>
      </div>
      <div className="relative -bottom-12">
        <p className='text-2xl'>En desarrollo </p>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
