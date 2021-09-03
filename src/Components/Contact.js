import React from "react";


const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <h2>My Work</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='contactPad'>
        <div className='row'>
          <div>
            <div className='card CardPad'>
              <h1 className='card-header h1 pt-4 pb-3'>Contact Me Directly</h1>
              <div className='card-background'>
                <div className='col-md'>
                  <h2>Damian De Leon</h2>
                  <hr></hr>
                  <p>
                    Email:{" "}
                    <a href='mailto:damianmdeleon@gmail.com'>
                      damianmdeleon@gmail.com
                    </a>
                  </p>
                  <p>
                    Phone: <a href='tel:5125697525'>512-569-7525</a>
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
