import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import Timer from './components/Timer'
import FocusInput from './components/FocusInput'
import { CounterProvider } from './components/CounterContext'

function App() {

  const [count, setCount] = useState(0)
  const [isCounterShow, setIsCounterShow] = useState(false)

  const handleShowCounter = () => {
    setIsCounterShow(true)
  }


  const handleShowTimer = () =>{
    return (<Timer/>)
  }


  return (
    <CounterProvider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">


        { isCounterShow && <Counter />}


        <Timer/>

        <FocusInput/>
        

      </div>
      <p className="read-the-docs">

        <button onClick={handleShowCounter} > Show Counter</button>
        <button onClick={handleShowTimer} > Show Timmer</button>

      </p>
    </CounterProvider>
  )
}

export default App
