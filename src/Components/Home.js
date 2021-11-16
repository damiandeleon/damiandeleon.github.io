import React from "react";
import "../../src/index.css";

function Home() {
  return (
    <>
      <div
        id='home'
        className='row yellowBG '
        style={{ height: "100vh" }}
      >
        <div>
          <div >
            <div className='introCard text-center'>
              <p>HELLO, I'M DAMIAN DELEON.</p>
              <p>FULL STACK WEB DEVELOPER </p>
            </div>
            <div className='card-header h1 pt-2 pb-2'>
              <h1 style={{ marginLeft: "50px", color: "white" }}>About Me</h1>
            </div>
            <div className='card-body ms-5'>
              <article>
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "rgba(66, 121, 223, 0.75)",
                  }}
                >
                  <p>
                    Full Stack Web Developer with a Bachelors in Business and
                    over 20 years of experience working for companies like IBM,
                    Facebook, Apple, and General Motors. Earned a certificate
                    from the Coding Boot Camp at the University of Texas in
                    Austin. Skilled in the fundamentals of HTML, CSS, Bootstrap,
                    and React.js and excited to learn more and expand my
                    knowledge base. Efficient worker and a strategic thinker
                    with the ability to pivot upon changing conditions. Goal is
                    to build websites and apps that provide a practical service
                    to people and businesses. Excited to join a team that is
                    fast-paced and quality-driven and help them make a positive
                    impact on the world.
                  </p>
                </div>
                <hr />
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
