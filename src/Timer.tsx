import React from 'react'
import './Timer.css'

export default function Timer(props: { colon: boolean; seconds: number; running: boolean }): JSX.Element {
  return (
    <div className={'Timer' + (props.running ? '' : ' zero')}>
      {secondsToString(props.seconds, props.colon && props.running)}
    </div>
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
