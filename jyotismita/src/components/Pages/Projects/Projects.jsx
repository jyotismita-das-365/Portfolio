import "./Projects.css";
import Project1 from "../../../assets/project1.png";

const Projects = () => {
  return (
    <>
      <div className="project-container">
        <div className="project-card">
          <img src={Project1} alt="project" />

          <h2>Airbnb Clone</h2>

          <p>
            A responsive MERN stack web application with authentication and
            booking features.
          </p>

          <div className="project-buttons">
            <button>Live Demo</button>
            <button>GitHub</button>
          </div>
        </div>
        <div className="project-card">
          <img src={Project1} alt="project" />

          <h2>Airbnb Clone</h2>

          <p>
            A responsive MERN stack web application with authentication and
            booking features.
          </p>

          <div className="project-buttons">
            <button>Live Demo</button>
            <button>GitHub</button>
          </div>
        </div>
        <div className="project-card">
          <img src={Project1} alt="project" />

          <h2>Airbnb Clone</h2>

          <p>
            A responsive MERN stack web application with authentication and
            booking features.
          </p>

          <div className="project-buttons">
            <button>Live Demo</button>
            <button>GitHub</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
