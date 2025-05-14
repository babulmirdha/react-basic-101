import { useState } from 'react'
import '../App.css'
import { useContextCounter } from './CounterContext'

function Counter() {
  const {contextCounter} = useContextCounter()
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}, My Count:{contextCounter}
        </button>
      </div>
    </>
  )
}

export default Counter
