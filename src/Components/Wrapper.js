import React from 'react'
import Home from './Home';
import Contact from './Contact';
import ProjectList from './ProjectList';
import About from './About';

function Wrapper() {
    return (
      <>
        <div className='bgimg-1'>
          <Home />
        </div>
        <div >
          <ProjectList />
        </div>
        <div className='yellowBG'>
          <About />
        </div>
        <div className='bgimg-3'>
          <Contact />
        </div>
      </>
    );
}

export default Wrapper
