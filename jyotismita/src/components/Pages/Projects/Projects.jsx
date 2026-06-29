import "./Projects.css";
import Project1 from "../../../assets/project1.png";

const Projects = () => {
  const btnitem = ["ReadMore", "Code"];
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
            <button>{btnitem[0]}</button>
            <button>{btnitem[1]}</button>
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
            <button>{btnitem[0]}</button>
            <button>{btnitem[1]}</button>
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
            <button>{btnitem[0]}</button>
            <button>{btnitem[1]}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
