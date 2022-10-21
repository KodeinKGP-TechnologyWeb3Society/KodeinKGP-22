import React from 'react'
import Notification from './Notification'
import PrizeDist from './PrizeDist'
import Rules from './Rules'
import './Hackathon.css'

const Hackathon = () => {
  return (
    <div style={{marginTop: "5%"}}>
      <Notification/>
      <Rules/>
      <PrizeDist/>
    </div>
  )
}

export default Hackathon
