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
      <div className="heading_box" style={{ marginBottom: "10%" }}>
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
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi quae animi neque beatae amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi quae animi neque beatae amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi quae animi neque beatae amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi quae animi neque beatae amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi quae animi neque beatae amet.</li>
          </ul>
        </div>
        <div style={{ marginTop: "70px" }}>
          <h4 style={{width: '100%', textAlign: 'center'}} className="page3_subtitle text3">-----Stay Updated with any announcements-----</h4>
        </div>
      </div>
    </div>
  )
}

export default Notification
