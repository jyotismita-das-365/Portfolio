import Jyoti from "../assets/jyotiPassport.png";
const About = () => {
  return (
    <>
      <div className="bg-black text-white flex">
        <div>
          <p className="text-lg text-pretty text-center lg:text-2xl">I am a Computer Science engineering student with a strong interest in software development and web technologies. I have hands-on experience in the MERN stack (MongoDB, Express.js, React, and Node.js) and Java programming. I enjoy building responsive and user-friendly web applications and continuously improving my problem-solving skills. I have also worked on projects like an Airbnb clone and other web-based applications, which helped me understand real-world development practices. I am eager to learn new technologies and looking for an opportunity to start my career as a software developer.</p>
        </div>

        <img src={Jyoti} alt="" className="border-8 border-double border-white rounded-b-full rounded-s-full h-96 mb-10 ml-10 lg:h-1/3"/>
      </div>
    </>
  );
};

export default About;
