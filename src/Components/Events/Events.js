import React from "react";
import './Events.css';



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
  
