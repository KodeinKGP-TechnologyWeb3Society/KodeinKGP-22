import React from 'react'
import { ReactNotifications, Store } from 'react-notifications-component';
import 'animate.css'
import 'react-notifications-component/dist/theme.css'

import Notification from './Notification'
import PrizeDist from './PrizeDist'
import Rules from './Rules'
import './Hackathon.css'
import Gallery from './Gallery/Gallery';

const Hackathon = () => {
  return (
    <div style={{marginTop: "5%"}}>
      <Notification/>
      <Rules/>
      <PrizeDist/>
      <Gallery />
    </div>
  )
}

export default Hackathon
