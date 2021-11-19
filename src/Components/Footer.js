import React from "react";
import DamianResume from "../Assets/Damian_Deleon_Resume.pdf";

function Footer() {
  return (
    <div>
      <div id='footer'>

          <a
            href='https://www.linkedin.com/in/damian-de-leon-051b4b2b/'
            target='blank'
          >
            <i className='fab fa-linkedin fa-lg ms-5 me-5 grow hover'></i>
          </a>


          <a href='https://github.com/damiandeleon' target='blank'>
            <i className='fab fa-github fa-lg me-5 grow hover'></i>
          </a>

          <a
          className='grow hover'
            href={DamianResume}
            target='blank'
            style={{ textDecoration: "none" }}>Resume
          </a>
      </div>
    </div>
  );
}

export default Footer;
