import React from "react";
import "../../src/index.css";

function Home() {
  return (
    <>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <div className='card introCard text-center bg-opacity-10'>
            <div className='card-body'>
              <p>HELLO, I'M DAMIAN DELEON.</p>
              <p>FULL STACK WEB DEVELOPER </p>
            </div>
          </div>
        </div>
        <div className='col-3'></div>
      </div>
    </>
  );
}

export default Home;
