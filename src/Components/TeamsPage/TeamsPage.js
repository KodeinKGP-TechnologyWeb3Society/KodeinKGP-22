import React from "react";
import WebTeam from "./WebTeam.json";
import DesignTeam from "./DesignTeam.json";
import EventTeam from "./EventTeam.json";
import BlockchainTeam from "./BlockchainTeam.json";
import AITeam from "./AITeam.json";
import Founders from "./Founders";
import "./TeamsPage.css";

const TeamsPage = () => {
  const indicator = (member) => {
 return (
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${member.id-1 }`} className={member.id==1 ? "active":""} aria-label={`Slide ${member.id}`}></button>
    )
  
};
const slide = (member) => {
  return (
   <div className={ member.id == 1 ? "carousel-item active" :"carousel-item" }>
   <article className="member" key={member.id}>
     <div className="photo-image">
       <img src={member.image_url} alt="profile-photo" />
       <div className="hello">
         <span>
           <a href={member.facebook} target="_blank">
             <i className="fa-brands fa-facebook"></i>
           </a>
         </span>
         <span>
           <a href={member.mailid} target="_blank">
             <i className="fa-solid fa-envelope"></i>
           </a>
         </span>
         <span>
           <a href={member.instagram} target="_blank">
             <i className="fa-brands fa-instagram-square"></i>
           </a>
         </span>
         <span>
           <a href={member.linkedin} target="_blank">
             <i className="fa-brands fa-linkedin"></i>
           </a>
         </span>
         <span>
           <a href={member.github} target="_blank">
             <i className="fa-brands fa-github"></i>
           </a>
         </span>
       </div>
     </div>
     <h5>
       <strong>{member.name}</strong>
     </h5>
   </article>
   </div >
 );
 
}
const teams = (team)=>{
  return (
  <div className="team">
      <div className="app">
      <div id={`carouselExampleRide${team[0][0].teamId}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
    {team[0].map(indicator)}
  </div>
  <div className="carousel-inner">
    {team[0].map(slide)}  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleRide${team[0][0].teamId}`} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleRide${team[0][0].teamId}`} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
      </div>
      <div className="teamContent">
        {team[1].content}
      </div>
      </div>
  );
}
  
  return (
    <div style={{ marginTop: "2%" }}>
      <h3 className="headers">Advisors</h3>
      <Founders />
      <h3 className="headers">Tech Team Members</h3>
      {teams(WebTeam)}
      <h3 className="headers">Blockchain Team Members</h3>

      {teams(BlockchainTeam)}
      <h3 className="headers">Events Team Members</h3>
      
      {teams(EventTeam)}
      <h3 className="headers">Design Team Members</h3>

      {teams(DesignTeam)}
      <h3 className="headers">AI Team Members</h3>

      {teams(AITeam)}
      
    </div>
  );
};

export default TeamsPage;
