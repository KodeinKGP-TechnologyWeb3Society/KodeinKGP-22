import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Notification = () => {
  // const toastId = React.useRef(null);
  // const toastId2 = React.useRef(null);
  // const toastId3 = React.useRef(null);

  // const notify = () => {
  //   if (! toast.isActive(toastId.current)){
  //    toastId.current = toast.success("this is first", {theme: 'dark', transition: Slide, autoClose: false, className: 'toast1'});
  //   }
  //   if (! toast.isActive(toastId2.current)){
  //     toastId2.current = toast.success('this is second', {theme: 'dark', draggable: true, transition: Slide, autoClose: false,position: toast.POSITION.TOP_CENTER});
  //   }
  //   if (! toast.isActive(toastId3.current)){
  //     toastId3.current = toast.success('this is third', {theme: 'dark', draggable: true, transition: Slide, autoClose: false,position: toast.POSITION.TOP_CENTER});
  //   }
  // }
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
        <div className="notifications_content">
          {/* <ToastContainer /> */}
          <ul>
            <li>Register using the following Link: <a target="_blank" href="https://forms.gle/3i8iMrvi549var9y5">Hack-an-Intern</a></li>       
            <li>Details regarding the venue and problem statement will be informed to everyone after registration.</li>   
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
