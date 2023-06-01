import React from 'react'
import ConcordiaImg from '../../../assets/concordia.jpg'
import './styles.css'
import { Link } from 'react-router-dom'

const Concordia = () => {
  return (
    <section>
      <div className='event_img'>
        <img src={ConcordiaImg} alt="" className='img' />
      </div>
      <div className="registration">
        <Link to='https://concordia.devfolio.co' target='_blank'>
          <button className='apply_btn'>Apply Here</button>
        </Link>
        <p>Use Referal code <span>KODEINKGP</span> for early announcements and priority considerations</p>
      </div>

      <div className="event_content">
        <div className="description">
          <p>
            Calling all talented Rust developers! Are you passionate about solving challenges in decentralized identities, web3-first user experiences, and DeFi platforms? If so, seize this incredible opportunity to participate in a two-week hackathon. Not only will you compete for cash rewards, but you also have a chance to win grants in your respective category.<br/><br/>

            Introducing Concordium, the public Layer 1 blockchain backed by science. It's specifically designed to create a safer digital world. The Concordium Foundation is on a mission to empower individuals and industries, enabling them to fully harness the potential of blockchain technology. We believe that sustainability, privacy, compliance, and safety are essential aspects of the crypto revolution.
            <br/><br/>
            As the digital world of tomorrow takes shape, Concordium will be at the forefront, driving transformative solutions that address real-world challenges. Join us on this exciting journey and be a part of building the future!
          </p>
        </div>
        
        <div className='dates'>
          <h2>IMPORTANT DATES</h2>
          <ul>
            <li>
              Last date to register : <span>June 13, 2023</span></li>
            <li>
              Introduction & Code-along workshops on June 12th & 13th, 2023
            </li>
            <li>
              Hackathon commences on: June 14, 2023
            </li>
          </ul>
        </div>

        <div className="prizes">
          <h2>PRIZES</h2>
        </div>
      </div>
    </section>
  )
}

export default Concordia