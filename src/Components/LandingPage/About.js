import Aos from "aos";
import "aos/dist/aos.css";
import { React, useState, useEffect } from "react";
import { animated } from "react-spring";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <h1 className="about_kodeinkgp">About KODEINKGP</h1>
      <animated.div className="about" data-aos="fade-up">
        Programming problem can be solved if we build logic properly and for
        logic it is necessary to practice question. After understanding lack of
        availability of question in sorted manner, Kodeinkgp have brought to you
        a platform to get questions of PDS Lab and Theory course as well as
        solutions to each of them. Questions include Lab tests, Lab Assignments
        and Tutorials and Theory tests along with their detailed solutions and
        also support videos!!
      </animated.div>
    </div>
  );
};

export default About;
