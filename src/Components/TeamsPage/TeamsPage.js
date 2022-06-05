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
      <div className="app">
        {Members.map((member) => {
          return (
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
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </span>
                </div>
              </div>
              <h5>
                <strong>{member.name}</strong>
              </h5>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsPage;
