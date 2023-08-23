import Aos from "aos";
import "aos/dist/aos.css";
import { React, useState, useEffect } from "react";
import { animated } from "react-spring";
import PdsPoster from "./pdsposter.jpg";
// import BlockchainHackathon from "./Blockchain Hackathon.jfif";
// import Perks from "./perks.jfif";
import Cards from "./Cards";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <h1 style={{"fontSize": "80px", "paddingTop":"50px"}}>About KODEINKGP</h1>
      <animated.div className="about_vision" data-aos="fade-up">
        “The Web as I envisaged it, we have not seen it yet. The future is still
        so much bigger than the past.”
      </animated.div>

      <animated.div className="about" data-aos="fade-up">
        A student-run society that aims to spread awareness and educate students
        about the potential of Web 3.0 and future technologies. We host
        workshops and hackathons to give students hands-on experience with
        Blockchain Development and Artificial Intelligence. Additionally, we use
        our skills in web development and blockchain to work on real-world
        problems faced by the student community at IIT Kharagpur and beyond. By
        joining KodeinKGP, students can gain valuable technical skills and
        contribute to solving important problems while learning about one of the
        most exciting and rapidly-evolving technologies of our time. <br />
      </animated.div>
      <br />
      <h1 className="pds_title">Hey Freshers! Troubled about finding right resources for PDS!</h1>
      <animated.div className = "pds_about" data-aos = "fade-up">
        We are here to help you out !!!
      </animated.div>
      <a
          href="../QnA"
          style={{ textDecoration: "none", color: "#10d6f5" }}
      >
        <img
          style={{
            width: "40%",
            margin: "1% 30% 5% 30%"
          }}
          src={PdsPoster}
          alt="Blockchain Hackathon"
        />{" "}
      </a>{" "}
      <h2 style={{"fontSize": "2.5vw" , "textAlign": "center"}}>We are engaged in the following fields of expertise:</h2>

      <Cards />
      <div className="communities">
        <animated.div className="communities_about" data-aos="fade">
        🚀 Explore the future with us! Join our vibrant community at the crossroads of Web3.0 . Unleash innovation together! 🌐 #JoinUsNow
        </animated.div>
        <animated.div className='community_links' data-aos="fade">
        <a
          target="_blank"
          href="https://chat.whatsapp.com/IFt69sSqZsu7FlRWl3EIbk"
          style={{ textDecoration: "none", color: "white" }}
        >
          Web3.0 Community
        </a>{" "}
        </animated.div> 
      </div>

        {/* Join the{" "}
        <a
          target="_blank"
          href="https://manager.daolens.com/app/dao/767/overview?invite=true"
          style={{ textDecoration: "none", color: "#10d6f5" }}
        >
          Blockchain Community
        </a>{" "}
        now to decrypt the decentralized Crypto world! <br />{" "} */}
        {/* <img
          style={{
            width: "48%",
            paddingTop: "2%",
          }}
          src={BlockchainComm}
          alt="Blockchain Hackathon"
        />{" "} */}
        {/* <img
          style={{
            width: "49%",
            paddingTop: "2%",
          }}
          src={Perks}
          alt="Blockchain Hackathon"
        /> */}
        {/* <br />
        <br />
        Already know Blockchain and want to implement in a real life scenario
        and win exciting prizes? Register for the exclusive{" "}
        <a
          target="_blank"
          href="https://lnkd.in/gNe3vJRX"
          style={{ textDecoration: "none", color: "#10d6f5" }}
        >
          Blockchain Hackathon
        </a>{" "}
        !!! Be quick as the deadline is close - 25th February, 2023
        <br />{" "} */}
        {/* <img
          style={{
            width: "50%",
            paddingTop: "2%",
          }}
          src={BlockchainHackathon}
          alt="Blockchain Hackathon"
        /> */}
        {/* <br />
        <br />
        Await for the most desired{" "}
        <a
          target="_blank"
          href=""
          style={{ textDecoration: "none", color: "#10d6f5" }}
        >
          Artificial Intelligence Community
        </a>{" "}
        to dive deep into what this ChatGPT is upto...
        <br /> */}
        {/* <br /> For freshers, have a look at something that will boost your
        programming skills: (menu -{">"} Q&A Section) */}
    </div>
  );
};

export default About;
