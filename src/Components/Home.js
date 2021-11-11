import React from "react";
import "../../src/index.css";

function Home() {
  return (
    <>
      <div id='home' className='row bgimg-1 container'
      style={{height: "100vh"}}>
        <div className='col-2'></div>
        <div className='col-8'>
          <div className='card introCard text-center'>
            <div className='card-text'>
              <p>HELLO, I'M DAMIAN DELEON.</p>
              <p>FULL STACK WEB DEVELOPER </p>
            </div>
          </div>
        </div>
        <div className='col-2'></div>
      </div>
    </>
  );
}

export default Home;
