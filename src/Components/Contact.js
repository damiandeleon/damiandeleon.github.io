import React from "react";


const Contact = () => {
  return (
    <div id='contact' className='yellowBG' style={{ height: "100vh" }}>
      <div>
        <div id='top'>
          <div className='card-header h1 pt-2 pb-2'>
            <h1 style={{ color: "white" }}>Contact Me</h1>
          </div>
        </div>
        <div className='row'>
          <div className='contactPad'>
            <div className='card-background'>
              <div>
                <div className='col-md'>
                  <hr></hr>
                  <p>
                    <i className='fas fa-envelope me-3' />
                    <a href='mailto:damianmdeleon@gmail.com'>
                      damianmdeleon@gmail.com
                    </a>
                  </p>
                  <p>
                    <i className='fas fa-phone me-3' />
                    <a href='tel:5125697525'>512-569-7525</a>
                  </p>
                  <p>
                    <i className='fas fa-map-marker-alt me-3'></i>
                    Austin, TX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
