import React from "react";
import profilePic from "../Assets/Images/profilePicCircle.jpeg";

function About() {
  return (
    <div>
      <div className='card-background3' style={{ height: "100vh" }}>
        <div>
          <div id='top'>
            <div>
              <div
                id='about'
                className='card-body ms-5 me-5'
                style={{ textAlign: "center" }}
              >
                <img
                  src={profilePic}
                  className='profilePic'
                  alt='project screenshot'
                  width='175px'
                  style={{ borderRadius: "100px" }}
                />
                <article>
                  <div className='profiledescription'>
                    <h2>Summary</h2>
                    <p>
                      Full Stack Web Developer with a Bachelors in Business and
                      over 20 years of experience in the Buseiness Services Industry working for companies like
                      IBM, Facebook, Apple, and General Motors.
                    </p>
                  </div>
                  <hr />
                </article>
                <article>
                  <div className='profiledescription'>
                    <h2>Why Web Development?</h2>
                    <p>
                      I have a lifelong passion for figuring out how things work, and fixing things.  Be it from learning about physiology and fitness, to tearing down and building my first comptuer, and fixing cars with my father. My 23 years in business was built on taking what clients wanted for their businesses and making it happen. I used various skills such as project managmeent, process mangement, technical writing, operations management, and quality management to be successful.  When I discovered coding, I found that those skills tranfsered perfectly into the DevOps and the Agile development concepts. I found a passion in coding and it's ability to impact society and businesses.  I never stop coding and I'm excited to tackle what's next.
                    </p>
                  </div>
                </article>
              </div>

              {/* <div className='accordion card-header'>
                <div className='accordion-item'>
                  <h2 className='accordion-header ms-4' id='headingOne'>
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
                    <div className='accordion-body'>
                      I started my career in business after graduating college.
                      For the years between 1997 to 2020, I worked in the
                      contact center industry. My professional career in Austin
                      was devoted to Concentrix Corp. I had much success with
                      the company between 2003 - 2020. However I decided that I
                      wanted to try something completely different in a new
                      emerging industry. Web Development and coding was
                      something that I knew would give me the exciting challenge
                      I was seeking. I am excited to make it my new career.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header ms-4' id='headingTwo'>
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
                    <div className='accordion-body table-responsive-sm'>
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
                  <h2 className='accordion-header ms-4' id='headingThree'>
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
                    <div className='accordion-body'>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
