import Profile from "../../../assets/profile.png";
import "./Banner.css";
import Resume from "../Resume/Resume"
import {Link} from "react-router-dom"

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <div className='img-container'>
          <img src={Profile} alt="Jyotismita Das" className="profile-img"/>
        </div>
        <div>
          <h1>Hi! I'm Jyotismita Das</h1>
          <h3>MERN Stack Developer</h3>
          <p>
            Crafting scalable and interactive web applications using MERN
            technologies.
          </p>
          <Link to="/resume">
          <button>Resume</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
