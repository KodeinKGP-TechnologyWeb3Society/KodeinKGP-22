import React from 'react'

const Modal = ({closeModal}) => {
  return (
    <div className="blurBackground">
    <div className='modalBackground'>
        <button className='close' onClick={() => {closeModal(false)}}> X </button>
         <div className="content">
            <h1>Hackathon is over!!</h1>
            <p style={{textAlign:'center'}}>on 2nd November</p>
        </div>
        
    </div>
    </div>
  )
}

export default Modal