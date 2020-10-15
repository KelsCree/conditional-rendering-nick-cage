import React from 'react'

export default function CageImage({ showNickCage }) {

const picToggle = () => (showNickCage? <img src='https://i.pinimg.com/originals/77/d4/ab/77d4abbbe1221530619798b6252b7d2f.jpg' alt='Nick Cage'></img> 
    : <></>)

  return (
    <div>
      {picToggle()}
    </div>
  )
}