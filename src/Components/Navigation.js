import React from "react";
import { SocialIcon } from "react-social-icons";

function Navigation() {
  return (
    <>
      <nav class='navbar navbar-inverse navbar-fixed-left'>
        <div class='container'>
          <div class='navbar-header' style={{ fontSize: "10px" }}>
            <a
              class='nav-link active'
              aria-current='page'
              title='Home'
              href='#home'
            >
              <i class='fas fa-home fa-2x'></i>
            </a>
            <a class='nav-link' title='My Work' href='#projects'>
              <i class='fas fa-th fa-2x'></i>
            </a>
            <a class='nav-link' title='About' href='#about'>
              <i class='fas fa-user-astronaut fa-2x'></i>
            </a>
            <a class='nav-link' title='Contact Me' href='#contact'>
              <i class='fas fa-envelope fa-2x'></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
