import React from 'react'
import Images from './images.json'
import './gallery.css'

const Gallery = () => {
  return (
    <div className = "container">
      <div className = "title">
        <h3>Congratulations to the winning teams and intern achievers !!! </h3>
      </div>
      <div className="gallery">
        <h4 style={{textAlign: 'center'}}>Photos</h4>
        <div className="content">
          {Images.map(item => {
            return(
            <div key={item.id} className="image">
              <img src={item.url} alt="img" />
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gallery