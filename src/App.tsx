import React, { useEffect, useState } from 'react'
import './App.css'
import Timer from './Timer'

function App(): JSX.Element {
  const [seconds, setSeconds] = useState(25 * 60)
  const [colon, setColon] = useState(true)
  useEffect(counterTimer, [])
  useEffect(colonTimer, [])

  return (
    <div className="App">
      <header className="App-header">
        <Timer seconds={seconds} colon={colon} />
      </header>
    </div>
  )

  function counterTimer() {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => Math.max(seconds - 1, 0))
    }, 1000)

    return () => clearInterval(intervalId)
  }

  function colonTimer() {
    const intervalId = setInterval(() => {
      setColon((colon) => !colon)
    }, 700)

    return () => clearInterval(intervalId)
  }
}

export default App
