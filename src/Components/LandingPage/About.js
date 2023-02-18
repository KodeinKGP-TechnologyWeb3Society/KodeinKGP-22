import Aos from "aos";
import "aos/dist/aos.css";
import { React, useState, useEffect } from "react";
import { animated } from "react-spring";
import BlockchainComm from "./Blockchain Community.png";
import BlockchainHackathon from "./Blockchain Hackathon.jfif";
import Perks from "./perks.jfif";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <h1 className="about_kodeinkgp">About KODEINKGP</h1>
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
        <br />
        Join the{" "}
        <a
          target="_blank"
          href="https://manager.daolens.com/app/dao/767/overview?invite=true"
          style={{ textDecoration: "none", color: "#10d6f5" }}
        >
          Blockchain Community
        </a>{" "}
        now to decrypt the decentralized Crypto world! <br />{" "}
        <img
          style={{
            width: "48%",
            paddingTop: "2%",
          }}
          src={BlockchainComm}
          alt="Blockchain Hackathon"
        />{" "}
        <img
          style={{
            width: "49%",
            paddingTop: "2%",
          }}
          src={Perks}
          alt="Blockchain Hackathon"
        />
        <br />
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
        <br />{" "}
        <img
          style={{
            width: "50%",
            paddingTop: "2%",
          }}
          src={BlockchainHackathon}
          alt="Blockchain Hackathon"
        />
        <br />
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
        <br />
        <br /> For freshers, have a look at something that will boost your
        programming skills: (menu -{">"} Q&A Section)
      </animated.div>
    </div>
  );
};

export default About;
