import React from "react";
import Members from "./members.json";
import Founders from "./Founders";
import "./TeamsPage.css";

const TeamsPage = () => {
  
  return (
    <div style={{ marginTop: "2%" }}>
      <h3>Heads</h3>
      <Founders />
      <h3>Tech Team Members</h3>
      <div id="team">
      <div className="app">
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    {Members.map((member) => {
      if(member.id!=1){
        return (
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${member.id - 1}`} aria-label={`Slide ${member.id}`}></button>
        )
      }
    })}
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <article className="member" key={Members[0].id}>
              <div className="photo-image">
                <img src={Members[0].image_url} alt="profile-photo" />
              </div>
              <h5>
                <strong>{Members[0].name}</strong>
              </h5>
            </article>
    </div>
    {Members.map((member) => {
          if(member.id!='1') return (
            <div className="carousel-item">
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
          
        })}
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
      </div>
      <div id="teamContent">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sit totam, eligendi tempora soluta blanditiis molestias ipsa laborum officia, asperiores saepe error eveniet tempore necessitatibus recusandae iusto eaque adipisci. Saepe quasi hic unde enim repellendus blanditiis dolorem nesciunt fuga, incidunt modi porro aliquam earum deleniti, aperiam repudiandae commodi voluptatem sit et alias? Molestias modi, voluptate eius accusantium quae, temporibus sint exercitationem quaerat fugit deleniti illum delectus minima aliquam suscipit autem, labore molestiae praesentium soluta quos amet at. Molestias, consequuntur. Enim veritatis praesentium sapiente omnis laborum ratione quaerat ab dicta possimus delectus error est voluptas non fugit eos dolor perspiciatis atque labore, at libero. Deserunt nostrum porro vel accusamus quia, tempora, nihil ducimus esse nisi dicta ut natus quibusdam velit eligendi dignissimos doloremque dolorum quis animi fugit nesciunt quam dolor labore rerum! Quae, neque ipsum maxime minima animi iure dolorum saepe!
      </div>
      </div>
    </div>
  );
};

export default TeamsPage;
