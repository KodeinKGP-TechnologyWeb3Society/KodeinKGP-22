import React from "react";
import Styles from "./footer.module.css";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/kik-final-logo.png";

export default function Footer() {
  const linksList = [
    {
      heading: "Youtube Playlist",
      links: [
        {
          title: "CodeWithHarry",
          href: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR",
        },
        {
          title: "Harvard",
          href: "https://www.youtube.com/playlist?list=PL-fDNXex3rAYD1mSoEe8hLvoMW1_TkTbT",
        },
        {
          title: "Apna College",
          href: "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=7s",
        },
      ],
    },
    {
      heading: "Course Links",
      links: [
        {
          title: "PDS Course",
          href: "http://cse.iitkgp.ac.in/pds/",
        },
        {
          title: "CSE Moodle",
          href: "https://moodlecse.iitkgp.ac.in/moodle/course/index.php?categoryid=39",
        },
        {
          title: "W3Schools",
          href: "https://www.w3schools.com/c/",
        },
      ],
    },
  ];
  return (
    <footer>
      <hr></hr>
      <div className={Styles.footerContainer}>
        <div className={Styles.tsgContainer}>
          <div className={Styles.imgContainer} style={{
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              gap: '5px',
              margin: '10px'
            }}>
            <img src={Logo} alt="TSG Logo" style={{width: '45px', aspectRatio: '1/1'}} />
            <h2 className={Styles.tsgHeading} style={{margin: 0}}>KodeinKGP</h2>
          </div>
          <div className={Styles.tsgDescription}>
            <p className={Styles.address}>
              Indian Institute of Technology Kharagpur,
              <br />
              West Bengal - 721302
            </p>
          </div>
          <div className={Styles.iconsContainer}>
            <a
              target="_blank"
              href="https://www.facebook.com/KodeinKgp-102679938719093"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/KgpKodein"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/kodeinkgp/"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={Styles.linksContainer}>
          {linksList.map((linkGroup, index) => {
            return (
              <div className={Styles.linkGroup} key={index}>
                <h2 className={Styles.footerHeading}>{linkGroup.heading}</h2>
                <ul className={Styles.links}>
                  {linkGroup.links.map((link, index) => {
                    return (
                      <li style={{ listStyle: "none" }} key={index}>
                        <a
                          style={{ textDecoration: "none", color: "#f1c40f" }}
                          target="_blank"
                          href={link.href}
                          rel="noreferrer"
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
