import './App.css';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/web-image.png';
import img5 from './Images/AI-image.jpg';
import img6 from './Images/Blockchain-image.png';

function App() {
  return (
    <div>
      <div className = "heading"><span>Events</span></div>
      <div className="container">
      <div className="card">
        <img src={img1} alt="Hackathon" />
        <h2>Hackathons </h2>
      </div>
      <div className="card">
      <img src={img2} alt="Github" />
        <h2>GitHub Workshops</h2>
      </div>
      <div className="card">
      <img src={img3} alt="Workshop" />
      <h2>WorkShops</h2>
      </div>
    </div>
    
    <div className="stc">
      <h1>We are engaged in the following fields of expertise:</h1>
    </div>
    <div class="field-cards">
      <div class="field-card card1 transition-1">
        <img src={img4} alt="Web"></img>
        <div className = "content">
          <p className="field-heading">Web</p>
          <p className="field-description">
          Weave your digital aspirations into reality through our dynamic
          Web solutions, fusing creativity with functionality.</p>
        </div>
      </div>
         
      <div class="field-card card2 transition-2">
        <img src={img5} alt="AI &amp; Metaverse"></img>
        <div className = "content">
          <p className="field-heading">AI &amp; Metaverse</p>
          <p className="field-description"> Enter a realm where AI drives immersive
          Metaverse encounters, pushing boundaries of what's possible.</p>
        </div>
      </div>

      <div class="field-card card3 transition-3">
        <img src={img6} alt="Blockchain"></img>
        <div className = "content">
          <p className="field-heading">Blockchain</p>
          <p className="field-description">Transform transactions with our secure 
          Blockchain solutions, rewriting the rules of trust and transparency.</p>
        </div>
      </div>
    </div>

    <div>
      <div className="gallerytag">
      <div className="heading"><span>Gallery</span></div>
        <h3 className="quote">CONGRATULATIONS TO THE WINNING TEAMS AND INTERN ACHIEVERS !!!</h3>
      </div>
      <div className = "container2">        
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199837488-c8ce560e-2ef4-42bc-8847-f3ad7b0099c6.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199837650-634beb20-d81b-4ad5-bbb6-d9b6e5acd797.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199838104-6fc7dcf9-18ca-48c3-9931-01fc93a3ddc7.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199838247-8712b5ca-fbf4-47f1-819c-a5f851499b1d.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199838268-e79ac0ee-e25b-4b94-968c-bdaf7d7c2572.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199838630-277cf06f-8063-4673-b1fc-c690b3ca0988.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199838775-de259baf-5be7-4dd3-9b7f-eb2e39d11eae.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199838795-e4c86a01-9a8d-4868-a27d-8b922b91848f.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199842986-783e8ec9-0f15-4d7a-8352-5709bcae1f00.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199843138-ed40b43e-7c55-4b40-adf2-e81f41f062b6.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199843286-48af0524-fc4b-4bfe-8be9-1ab8e370c145.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199843324-dcdc4ca1-3a80-495a-a324-e7d82d33b252.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199843487-774fd115-7ab3-456a-b8e3-ef32f6f655fb.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199912707-ba2f4d82-7f04-45be-88a4-5570df8f213a.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199912661-b5ee2245-5fe4-4a3f-b3a4-2c9f4cc10dfd.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199912550-3087f669-8a9d-439f-9331-fc2cf41db379.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199912452-2efc98e7-2c69-4b1e-bad3-1ab10bb30f1b.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199912329-cedfb755-ed06-425a-8cf6-b17940eae39d.png" alt="img"></img></div>
        <div className = "galleryimg"><img src="https://user-images.githubusercontent.com/96824839/199912146-4951bdb2-80ef-45ca-bce3-64b03e10856e.png" alt="img"></img></div>

      </div>
    </div>
    </div>
  );
}

export default App;
