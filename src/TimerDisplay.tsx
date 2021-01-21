import React from 'react'
import './TimerDisplay.css'

export default function TimerDisplay(props: { colon: boolean; seconds: number; running: boolean }): JSX.Element {
  const digits = secondsToDigits(props.seconds)
  return (
    <div className={'Timer' + (props.running ? '' : ' zero')}>
      <Digit segments={digitTo7SegmentByte(digits[3])} highlight={!props.running} />
      <Digit segments={digitTo7SegmentByte(digits[2])} highlight={!props.running} />
      <Colon on={props.colon || !props.running} highlight={!props.running} />
      <Digit segments={digitTo7SegmentByte(digits[1])} highlight={!props.running} />
      <Digit segments={digitTo7SegmentByte(digits[0])} highlight={!props.running} />
    </div>
  )
}

function secondsToDigits(seconds: number): number[] {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return [s % 10, Math.floor(s / 10), m % 10, Math.floor(m / 10)]
}

function Digit(props: { segments: number; highlight: boolean }): JSX.Element {
  const bits = byteToBits(props.segments)
  const onColor = props.highlight ? '#ffffff' : '#333333'
  const offColor = '#090909'
  return (
    <div className="Digit">
      <svg viewBox="0 0 68 90" width="100%" height="100%">
        <g id="digit" transform="translate(-32.112548,-36.909167)">
          <path
            id="a"
            style={{ fill: bits[0] ? onColor : offColor }}
            d="m 42.740542,45.193624 15.945797,7.723042 h 22.567614 l 15.085902,-13.73973 c -1.723896,-1.343925 -3.95192,-2.13527 -6.485909,-2.13527 H 55.080357 c -5.276503,0 -10.197512,3.419679 -12.339815,8.151958 z"
          />
          <path
            id="b"
            style={{ fill: bits[1] ? onColor : offColor }}
            d="m 98.09427,40.961841 -14.849224,13.522688 -2.505789,17.829918 6.395474,7.766968 9.675378,-9.159647 3.130561,-22.276676 c 0.41497,-2.952715 -0.312182,-5.639397 -1.8464,-7.683251 z"
          />
          <path
            id="c"
            style={{ fill: bits[2] ? onColor : offColor }}
            d="m 93.827863,92.142179 -6.920507,-8.40414 -8.966896,8.488373 -2.447396,17.414958 11.48819,13.00541 c 1.880095,-1.98383 3.191785,-4.50161 3.578074,-7.25021 z"
          />
          <path
            id="d"
            style={{ fill: bits[3] ? onColor : offColor }}
            d="M 85.110565,124.30611 73.467351,111.125 H 49.128267 l -16.69614,7.93905 C 33.326686,123.68337 37.242308,127 42.437719,127 h 34.773589 c 2.868165,0 5.630378,-1.01155 7.899257,-2.69389 z"
          />
          <path
            id="e"
            style={{ fill: bits[4] ? onColor : offColor }}
            d="m 32.257462,116.37842 16.96434,-8.06617 2.411222,-17.159676 -6.50658,-7.551994 -9.505363,8.526613 -3.270086,23.269377 c -0.04653,0.33111 -0.0752,0.65793 -0.09353,0.98185 z"
          />
          <path
            id="f"
            style={{ fill: bits[5] ? onColor : offColor }}
            d="m 38.447265,72.01886 6.907588,8.018113 8.972063,-8.048088 2.421557,-17.233055 -14.815632,-7.175789 c -0.0813,0.350896 -0.149992,0.705634 -0.200504,1.065051 z"
          />
          <path
            id="g"
            style={{ fill: bits[6] ? onColor : offColor }}
            d="m 55.736648,74.083332 -8.749337,7.8481 6.915341,8.0269 H 76.70126 l 8.613428,-8.154024 -6.357752,-7.720976 z"
          />
        </g>
      </svg>
    </div>
  )
}

function byteToBits(byte: number): boolean[] {
  return Array.from(Array(8)).map((_, i) => !!((byte >> i) % 2))
}

function digitTo7SegmentByte(digit: number) {
  switch (digit) {
    case 0:
      return 63
    case 1:
      return 6
    case 2:
      return 91
    case 3:
      return 79
    case 4:
      return 102
    case 5:
      return 109
    case 6:
      return 125
    case 7:
      return 7
    case 8:
      return 127
    case 9:
      return 111
    default:
      return 0
  }
}

function Colon(props: { on: boolean; highlight: boolean }): JSX.Element {
  const onColor = props.highlight ? '#ffffff' : '#333333'
  const offColor = '#090909'
  return (
    <div className="Colon">
      <svg viewBox="0 0 20 90" width="100%" height="100%">
        <circle style={{ fill: props.on ? onColor : offColor }} id="circle" cx="12" cy="28" r="8" />
        <circle style={{ fill: props.on ? onColor : offColor }} id="circle" cx="8" cy="64" r="8" />
      </svg>
    </div>
  )
}
