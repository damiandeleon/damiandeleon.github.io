import React from "react";
import DamianResume from "../Assets/Damian_Deleon_Resume.pdf";

const Contact = () => {
  return (
    <div id='contact'>
      <div style={{ height: "100vh" }}>
        <div id='top'>
          <div className='card-header h1 pt-2 pb-2'>
            <h1 style={{ marginLeft: "50px", color: "white" }}>Contact Me</h1>
          </div>
        </div>
        <div className='row'>
          <div className='contactPad'>
            <div className='card-background'>
              <div>
                <div className='col-md'>
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
                <div className='aboutMeSpacing'>
                  <p>
                    Linked In:{" "}
                    <a
                      href='https://www.linkedin.com/in/damian-de-leon-051b4b2b/'
                      target='blank'
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    GitHub Profile:{" "}
                    <a href='https://github.com/damiandeleon' target='blank'>
                      GitHub
                    </a>
                  </p>
                  <p>
                    Resume:{" "}
                    <a href={DamianResume} target='blank'>
                      Resume
                    </a>
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
