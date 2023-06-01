import React from 'react'
import ConcordiaImg from '../../../assets/concordia.jpg'
import './styles.css'
import { Link } from 'react-router-dom'

const Concordia = () => {
  return (
    <section>
      <div className='event_img'>
        <img src={ConcordiaImg} alt='' className='img' />
      </div>
      <div className='registration'>
        <Link to='https://concordia.devfolio.co' target='_blank'>
          <button className='apply_btn'>Apply Here</button>
        </Link>
        <p>
          Use Referal code <span>KODEINKGP</span> for early announcements and
          priority considerations
        </p>
      </div>

      <div className='event_content'>
        <div className='description'>
          <p>
            If you’re a talented Rust developer, eager to solve for decentralized identities, web3-first user experiences and DeFi platforms / projects, this is your chance to participate in a two-week hackathon, competing for both cash rewards and grants in your respective category.
            <br />
            <br />
          </p>
        </div>

        <div className='dates'>
          <h2>IMPORTANT DATES</h2>
          <ul>
            <li>
              Last date to register : <span>June 13, 2023</span>
            </li>
            <li>
              Introduction & Code-along workshops on June 12th & 13th, 2023
            </li>
            <li>Hackathon commences on: June 14, 2023</li>
          </ul>
        </div>

        <div className='prizes'>
          <h2>PRIZES - $100,000</h2>
          <ul>
            <li>
              <h5>Decentralized Finance(DeFi) - $33,500</h5>
              <ol>
                <li className='first'>1st Prize - $2000 + A chance to win $30,000 in grants</li>
                <li className='second'>2nd Prize - $1000</li>
                <li className='third'>3rd Prize - $500</li>
              </ol>
            </li>
            <br />
            <li>
              <h5>Web3 Experiences - $33,500</h5>
              <ol>
                <li className='first'>1st Prize - $2000 + A chance to win $30,000 in grants</li>
                <li className='second'>2nd Prize - $1000</li>
                <li className='third'>3rd Prize - $500</li>
              </ol>
            </li>
            <br />
            <li>
              <h5>Decentralized Identities - $32,000</h5>
              <ol>
                <li className='first'>1st Prize - $1500 + A chance to win $30,000 in grants</li>
                <li className='second'>2nd Prize - $1000</li>
                <li className='third'>3rd Prize - $500</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>

      <div className='description' style={{width:'90%', margin: '2.5rem auto'}}>
        <p>
          Concordium is a public Layer 1, science-backed blockchain, designed for a safer digital world. The Concordium Foundation is building a safer digital world by empowering individuals and industries to harness the potential of blockchain. The blockchain mentality has shifted and there is an acceptance that sustainability, privacy, compliance and safety have a part to play in crypto.<br/>

          As the future of digital worlds gets built, Concordium will be at the heart of transformative solutions that address real-world challenges.
        </p>
      </div>


      <div style={{width: '90%', display: 'flex', justifyContent: 'end'}}>
        <Link to='https://concordia.devfolio.co' target='_blank'>
          <button className='apply_btn' style={{width: '180px', borderRadius: '15px'}}>Apply Here</button>
        </Link>
      </div>
    </section>
  )
}

export default Concordia
