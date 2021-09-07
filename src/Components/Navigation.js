import React from "react";

function Navigation() {
  return (
    <>

      <nav class='navbar navbar-inverse navbar-fixed-left'>
        <div class='container'>
          <div class='navbar-header'>
            <a class='nav-link active' aria-current='page' href='#home'>
              <i class='fas fa-home fa-2x'></i>
            </a>
            <a class='nav-link' href='#projects'>
              <i class='fas fa-th fa-2x'></i>
            </a>
            <a class='nav-link' href='#about'>
              <i class='fas fa-user-astronaut fa-2x'></i>
            </a>
            <a class='nav-link' href='#contact'>
              <i class='fas fa-envelope fa-2x'></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
