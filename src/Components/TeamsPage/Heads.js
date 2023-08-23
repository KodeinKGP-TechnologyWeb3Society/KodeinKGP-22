import React from 'react'
import './TeamsPage.css';
import Head from './Heads.json';

const Heads = () => {
    function eachHead( head){
        return (
             <article className = "member head">
              
              <div className="photo-image">
                <img src={head.image_url} alt="" />
                <div className = "hello">
                <span><a href={head.facebook} target = "_blank"><i className="fa-brands fa-facebook"></i></a></span>
                <span><a href={head.mailid} target = "_blank"><i className="fa-solid fa-envelope"></i></a></span>
                <span><a href="#" target = "_blank"><i className="fa-brands fa-instagram-square"></i></a></span>
                <span><a href={head.linkedin} target = "_blank"><i className="fa-brands fa-linkedin"></i></a></span>
                <span><a href={head.github} target = "_blank"><i class="fa-brands fa-github"></i></a></span>
              </div>
              </div>
              <h5><strong>{head.name}</strong></h5>
              <h6><strong>({head.role})</strong></h6>
              
            </article> 
        );
    }
  return (
    <div className='heads'>
        {Head.map(eachHead)}
        {/* <article className = "member">
              
              <div className="photo-image">
                <img src="https://user-images.githubusercontent.com/96824839/171794126-16b6182a-65f3-483b-95f1-04682526a6ca.jpg" alt="" />
                <div className = "hello">
                <span><a href="https://www.facebook.com/profile.php?id=100057206746965" target = "_blank"><i className="fa-brands fa-facebook"></i></a></span>
                <span><a href="mailto:surajgupta.3072@gmail.com" target = "_blank"><i className="fa-solid fa-envelope"></i></a></span>
                <span><a href="#" target = "_blank"><i className="fa-brands fa-instagram-square"></i></a></span>
                <span><a href="https://www.linkedin.com/in/suraj-gupta-457496201/" target = "_blank"><i className="fa-brands fa-linkedin"></i></a></span>
                <span><a href="https://github.com/surajgupta3072/" target = "_blank"><i class="fa-brands fa-github"></i></a></span>
              </div>
              </div>
              <h5><strong>Suraj Gupta</strong></h5>
              
            </article> */}

          
            
                
               
              
    
            
    </div>
  )
}

export default Heads;
