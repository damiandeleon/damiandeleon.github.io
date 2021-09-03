import React from "react";
import Wrapper from "./Wrapper";

function Navigation() {
  return (
    <>
      {/* <div class='navbar navbar-inverse navbar-fixed-left'>
        <ul class='nav navbar-nav'>
          <li>
            <a class='nav-link active' aria-current='page' href='/home'>
              <i class='fas fa-home fa-2x'></i>
            </a>
          </li>
          <li>
            <a class='nav-link' href='link-1'>
              <i class='fas fa-th fa-2x'></i>
            </a>
          </li>
          <li>
            <a class='nav-link' href='link-2'>
              <i class='fas fa-user-astronaut fa-2x'></i>
            </a>
          </li>
          <li>
            <a class='nav-link' href='link-3'>
              <i class='fas fa-envelope fa-2x'></i>
            </a>
          </li>
        </ul>
        
      </div> */}

      <nav class='navbar navbar-inverse navbar-fixed-left'>
        <div class='container'>
          <div class='navbar-header'>
            <a class='nav-link active' aria-current='page' href='/home'>
              <i class='fas fa-home fa-2x'></i>
            </a>
            <a class='nav-link' href='link-1'>
              <i class='fas fa-th fa-2x'></i>
            </a>
            <a class='nav-link' href='link-2'>
              <i class='fas fa-user-astronaut fa-2x'></i>
            </a>
            <a class='nav-link' href='link-3'>
              <i class='fas fa-envelope fa-2x'></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
