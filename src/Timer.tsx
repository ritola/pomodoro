import React from 'react'
import './Timer.css'

export default function Timer(props: { seconds: number; colon: boolean }): JSX.Element {
  return (
    <div className={'Timer' + (props.seconds === 0 ? ' zero' : '')}>{secondsToString(props.seconds, props.colon)}</div>
  )
}

function secondsToString(seconds: number, colon: boolean): string {
  const mm = pad2(Math.floor(seconds / 60))
  const ss = pad2(seconds % 60)
  return mm + (colon || seconds === 0 ? ':' : ' ') + ss
}

function pad2(n: number): string {
  return `${n}`.padStart(2, '0')
}
