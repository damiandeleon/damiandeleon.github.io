import React from "react";

const Project = (props) => {
  return (
    <div id='projects'>
      <div className=' bgimg-2'>
        <div id='top'>
          <div className='card-header h1 pt-2 pb-2'>
            <h1 style={{ marginLeft: "50px" }}>My Work</h1>
          </div>
        </div>

        <div className='row'>
          <div className='portfolioPad'>
            <div className='CardPadPortfolio'>
              <div className='card-group colBackground justify-content-center margin-auto'>
                {props.details.map((project) => {
                  return (
                    <div key={project.id}>
                      <div
                        className='card'
                        style={{
                          border: "lightblue 5px solid",
                          borderRadius: "10px",
                          margin: "10px",
                          padding: "40px",
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                          background:
                            "linear-gradient(0deg, rgba(52,52,52,1) 0%, rgba(102,102,102,1) 58%, rgba(171,171,171,1) 100%)",
                          maxWidth: "500px",
                        }}
                      >
                        <p className='card-font'>{project.name}</p>
                        <hr />
                        <div>
                          <p style={{ fontWeight: "bolder" }}>Tech Stack</p>
                          <p style={{ fontSize: "12px" }}>
                            {project.techStack}
                          </p>
                        </div>
                        <div id={"logo"}>
                          <img
                            src={project.img}
                            className='card-img-top'
                            alt='project screenshot'
                          />
                        </div>
                        <div style={{ marginTop: "20px" }}>
                          <p>{project.description}</p>
                        </div>
                        <div>
                          <div className='card-body'>
                            <a href={project.deployURL} target='blank'>
                              {" "}
                              {project.deployTitle}
                            </a>{" "}
                            |
                            <a href={project.gitHubURL} target='blank'>
                              {" "}
                              {project.gitHubTitle}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
