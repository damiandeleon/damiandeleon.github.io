import React from 'react'
import DamianResume from '../Assets/Damian_Deleon_Resume.pdf'

function About() {
    return (
      <div id='about'>
        <div className=''>
          <div className='row'>
            <div className='mb-5'>
              <div>
                <h1 className='card-header h1 pt-4 pb-3'>About Me</h1>
                <div style={{ margin: "10rem" }}>
                  <article>
                    <div>
                      <p>
                        Full Stack Web Developer with a Bachelors in Business
                        and over 20 years of experience working for companies
                        like IBM, Facebook, Apple, and General Motors. Earned a
                        certificate from the Coding Boot Camp at the University
                        of Texas in Austin. Skilled in the fundamentals of HTML,
                        CSS, Bootstrap, and React.js and excited to learn more
                        and expand my knowledge base. Efficient worker and a
                        strategic thinker with the ability to pivot upon
                        changing conditions. Goal is to build websites and apps
                        that provide a practical service to people and
                        businesses. Excited to join a team that is fast-paced
                        and quality-driven and help them make a positive impact
                        on the world.
                      </p>
                    </div>

                    <hr />
                    <div className='aboutMeSpacing'>
                      <p>
                        Damian's Linked In Profile:{" "}
                        <a
                          href='https://www.linkedin.com/in/damian-de-leon-051b4b2b/'
                          target='blank'
                        >
                          LinkedIn
                        </a>
                      </p>
                      <p>
                        GitHub Profile:{" "}
                        <a
                          href='https://github.com/damiandeleon'
                          target='blank'
                        >
                          GitHub
                        </a>
                      </p>
                      <p>
                        Download Damian's Resume:{" "}
                        <a href={DamianResume} target='blank'>
                          Resume
                        </a>
                      </p>
                    </div>
                  </article>
                </div>

                <div className='accordion card-header' id='accordionExample'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='false'
                        aria-controls='collapseOne'
                      >
                        My Professional Story
                      </button>
                    </h2>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body card-background'>
                        I started my career in business after graduating
                        college. For the years between 1997 to 2020, I worked in
                        the contact center industry. My professional career in
                        Austin was devoted to Concentrix Corp. I had much
                        success with the company between 2003 - 2020. However I
                        decided that I wanted to try something completely
                        different in a new emerging industry. Web Development
                        and coding was something that I knew would give me the
                        exciting challenge I was seeking. I am excited to make
                        it my new career.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingTwo'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        Languages Tools and Applications
                      </button>
                    </h2>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body card-background table-responsive-sm'>
                        <table className='table'>
                          <thead>
                            <tr>
                              <th scope='col'>Languages</th>
                              <th scope='col'>Applications</th>
                              <th scope='col'>Tools</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>JavaScript</td>
                              <td>GitHub</td>
                              <td>Express</td>
                            </tr>
                            <tr>
                              <td>CSS</td>
                              <td>MongoDB</td>
                              <td>React</td>
                            </tr>
                            <tr>
                              <td>HTML</td>
                              <td>MongoDB Atlas</td>
                              <td>Node</td>
                            </tr>
                            <tr>
                              <td>SQL</td>
                              <td>Heroku</td>
                              <td>API</td>
                            </tr>
                            <tr>
                              <td>NoSQL</td>
                              <td>GitHub</td>
                              <td>Handlebars</td>
                            </tr>
                            <tr>
                              <td> </td>
                              <td> </td>
                              <td>Bootstrap</td>
                            </tr>
                            <tr>
                              <td> </td>
                              <td> </td>
                              <td>Bootstrap React</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        Unique Things About Me
                      </button>
                    </h2>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body card-background'>
                        <article>
                          <br></br>
                          <ul>
                            <li>
                              I volunteered in a prison ministry for 3 years
                            </li>
                            <li>I am LGBT+ 🏳️‍🌈 </li>
                            <li>
                              I support Mobile Loaves and Fishes to help the
                              homeless
                            </li>
                            <li>I am a Trekkie 🖖🏼 </li>
                            <li>I practice physical fitness to stay healthy</li>
                          </ul>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About
