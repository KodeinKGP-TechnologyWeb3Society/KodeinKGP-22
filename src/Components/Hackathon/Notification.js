import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';
import { Link } from 'react-router-dom';


const Notification = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="heading_box" style={{ marginBottom: "4%" }}>
        <div>
          <p class="btn">
            <span>
              <span>
                <span className="border_box">Notifications</span>
              </span>
            </span>
          </p>
        </div>
        <div>
          <Link to={"/Hack-an-Intern/gallery"} class="btn">
            <span>
              <span>
                <span className="border_box">Gallery</span>
              </span>
            </span>
          </Link>
        </div>
        <div className="notifications_content">
          {/* <ToastContainer /> */}
          <ul>
            <li>Register using the following Link: <button className = "openModalBtn" onClick = {() => {setOpenModal(true)}}>Apply</button></li>

            

            {openModal && <Modal closeModal = {setOpenModal}/>}
            <li>Registration Deadline (Extended): 28th Oct, 6 pm</li>       
            <li>Details regarding the venue and problem statement will be informed to everyone on the venue - Raman Auditorium at 8pm.</li>  
            <li>Please bring your laptops and extension boards</li> 
            <li>For any queries contact: Suraj Gupta (8879555132)</li> 
          </ul>
        </div>
        <div >
          <h4 style={{width: '100%', textAlign: 'center'}} className="page3_subtitle text3">-----Stay Updated with any announcements-----</h4>
        </div>
      </div>
    </div>
  )
}

export default Notification
