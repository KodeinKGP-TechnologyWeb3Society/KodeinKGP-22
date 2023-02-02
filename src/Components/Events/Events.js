import React from "react";
import './Events.css';
import bg from '../pictures/bg.gif';
import pic from '../pictures/sample.png';

const Events = () => {
    return (
<div id='wrap'>
  <input className='trigger' name='rad' type='radio'/>
  <input className='trigger' name='rad' type='radio'/>
  <input className='trigger' name='rad' type='radio'/>
  <input className='trigger' name='rad' type='radio'/>
  <input className='trigger' name='rad' type='radio'/>
  <input className='trigger' name='rad' type='radio'/>
  <input className='trigger' name='rad' type='radio'/>
  <input checked='checked' className='trigger' name='rad' type='radio'/>
  <div className='innerwrap'>
    <input type='checkbox'/>
    <input type='checkbox'/>
    <input type='checkbox'/>
    <input type='checkbox'/>
    <input type='checkbox'/>
    <input type='checkbox'/>
    <input type='checkbox'/>
    <input type='checkbox'/>
    <div className='cards'>
      <div className='cardwrap'>
        <div className='card'>
          <div className='inner'>
            <h1><span>Hey Now</span>Somebody</h1>
            <div className='text'>
              <p>Well the years start coming and they don't stop coming</p>
            </div>
            <div className='link'>
              <p>Fed to the rules and I hit the ground running</p>
            </div>
          </div>
        </div>
      </div>
      <div className='cardwrap'>
        <div className='card'>
          <div className='inner'>
            <h1><span>You're an All-Star</span>once told</h1>
            <div className='text'>
              <p>Didn't make sense not to live for fun</p>
            </div>
            <div className='link'>
              <p>Your brain gits smart but your head gits dumb</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

    );
  };
  
  export default Events;
  
export default function Events() {
    return (
        <div>
            <div className="album py-5" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col card1">
                            <div className="card shadow-sm">
                                <img src={pic} alt=""/>
                                <div className="card-body">
                                    <p className="card-text" style={{ color: "black", textAlign: "center" }}><strong>Tile1 Should be put here</strong></p>
                                    <p className="Dsc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero consequuntur maiores totam! Beatae, similique alias rem ipsum ex tempore suscipit molestias obcaecati minus deleniti enim? Quia cupiditate aut enim nisi sapiente!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col card2">
                            <div className="card shadow-sm">
                                <img src={pic} alt=""/>
                                <div className="card-body">
                                    <p className="card-text" style={{ color: "black", textAlign: "center" }}><strong>Tile2 Should be put here</strong></p>
                                    <p className="Dsc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero consequuntur maiores totam! Beatae, similique alias rem ipsum ex tempore suscipit molestias obcaecati minus deleniti enim? Quia cupiditate aut enim nisi sapiente!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col card3">
                            <div className="card shadow-sm">
                                <img src={pic} alt=""/>
                                <div className="card-body">
                                    <p className="card-text" style={{ color: "black", textAlign: "center" }}><strong>Tile3 Should be put here</strong></p>
                                    <p className="Dsc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero consequuntur maiores totam! Beatae, similique alias rem ipsum ex tempore suscipit molestias obcaecati minus deleniti enim? Quia cupiditate aut enim nisi sapiente!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
