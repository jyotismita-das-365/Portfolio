import "./About.css";
import { useTheme } from "../../../context/ThemeContext";
const About = () => {

  const { theme } = useTheme();

  return (
    <>
      <div className={
        theme === "dark" ? "about dark-about" : "about light-about"
      }>
        <p>Hi! I'm Jyotismita Das, a Computer Science Engineering student and an aspiring Software Engineer with a passion for web development and technology. I have completed a month-long Web Development training program, where I gained hands-on experience in building modern web applications and strengthening my programming skills.</p>
        <p>I am currently seeking internship opportunities in web development to apply my knowledge, gain industry experience, and continue growing as a developer. I enjoy learning new technologies, solving problems, and creating projects that have a real-world impact.</p>
      </div>
      <div>
        <button>Contact</button>
        <button>Resume</button>
      </div>
      <div>
        <h1>Educational Journey</h1>
        <div>
          <h1>Sri Sukhmani Institute of Engineering & Technology, Punjab</h1>
          <h3>B.Tech in Computer Science & Engineering</h3>
          <p>2023-2027</p>
          <p>Grade: <b>8.25 CGPA</b></p>
        </div>

        <div>
          <h1>St. Attri Public School, Punjab</h1>
          <h3>Intermediate in Science</h3>
          <p>2021-2023</p>
          <p>Grade: <b>70%</b></p>
        </div>

        <div>
          <h1>Sugo Nodal High School, Odisha</h1>
          <h3>Matriculation</h3>
          <p>2020</p>
          <p>Grade: <b>73%</b></p>
        </div>
      </div>
    </>
  );
};

export default About;

