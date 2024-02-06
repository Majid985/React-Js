import React, { useState } from 'react'

function Score(props) {
    const [score, setScore]=useState(0)
    setScore(props.score)
  return (
    <div>Score:{score}</div>
  )
}

export default Score