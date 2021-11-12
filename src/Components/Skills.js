import React from "react";

const Skills = () => {
  return (
    <main
      id='about'
      className='neonCity'
      style={{ color: "white" , height: "100vh"}}
    >
      <div className='card-header h1 pt-2 pb-2'>
        <h1 style={{ marginLeft: "50px" }}>Technical Skills</h1>
      </div>
      <section className='bg-gradient-to-t from-gray-800 to-gray-500 rounded-lg shadow-2xl flex flex-col lg:items-center p-20 justify-center container mx-auto'>
        <div className='grid grid-flow-row xl:grid-flow-col grid-cols-1 gap-20'>
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>Front End</h2>
            <section className=''>
 
              <div className='d-flex justify-content-around'>
                <div>
                {/* JavaScript */}
                <a
                  href='https://www.javascript.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    className='flex mt-5 fab fa-js-square'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>
                </a>
                  </div>
              
                {/* CSS3 */}

                <a
                  href='https://www.w3.org/TR/CSS/#css'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    className='fab mt-4 fa-css3-alt '
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>
                </a>

                {/* React */}

                <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                  <i
                    class='fab fa-react mt-2'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>

                </a>

                {/* HTML */}

                <a
                  href='https://www.w3.org/TR/html52/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    className='fab fa-html5 mt-4'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>
                </a>

                {/* Bootstrap */}

                <a
                  className='flex p-2 flex-col'
                  href='https://getbootstrap.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    class='fab fa-bootstrap mt-5'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>
                </a>
              </div>
            </section>
          </div>
          <br />
          <br />
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>Back End</h2>
            <section>
              <div className='d-flex justify-content-around'>
                {/* MySQL */}
                <a
                  className='flex p-2 flex-col .img-fluid. max-width: 50% height: auto '
                  href='https://www.mysql.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    class='fas fa-database mt-5'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>
                </a>

                {/* Sequelize */}
                <a
                  className='flex p-2 flex-col'
                  href='http://sequelize.org/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    class='fas fa-table mt-4'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>{" "}
                </a>

                {/* Java */}
                <a
                  className='flex p-2 flex-col'
                  href='https://www.java.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    class='fab fa-java mt-2'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>{" "}
                </a>

                {/* Node.js */}
                <a
                  className='flex p-2 flex-col'
                  href='https://nodejs.org/en/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    className='fab fa-node mt-2'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>{" "}
                </a>

                {/* MongoDB */}
                <a
                  className='flex p-2 flex-col'
                  href='https://www.mongodb.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    class='fas fa-database mt-4'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>{" "}
                </a>

                {/* Mongoose */}
                <a
                  className='flex p-2 flex-col'
                  href='https://mongoosejs.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i
                    class='fas fa-otter mt-5'
                    style={{ fontSize: "50px", color: "white" }}
                  ></i>{" "}
                </a>
              </div>
              <div></div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
