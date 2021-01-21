import React, { useEffect, useState } from 'react'
import './App.css'
import TimerDisplay from './TimerDisplay'

function App(): JSX.Element {
  const [seconds, setSeconds] = useState(25 * 60)
  const [colon, setColon] = useState(true)
  const running = seconds > 0
  useEffect(counterTimer, [])
  useEffect(colonTimer, [])
  useEffect(runningEffect, [running])

  return (
    <div className="App">
      <header className="App-header">
        <TimerDisplay colon={colon} running={running} seconds={seconds} />
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

  function runningEffect() {
    if (running) {
      document.body.classList.add('running')
    } else {
      document.body.classList.remove('running')
    }
  }
}

export default App
