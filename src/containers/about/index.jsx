import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Albulena Lala",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Tirana, Albania",
  },
  {
    label: "Email",
    value: "albulenalala5@gmail.com",
  },
  {
    label:"Github",
    value:"https://github.com/Albulenalala",
  },
  {
    label:"Linkedin",
    value: "www.linkedin.com/in/albulena-lala-68888b1b7"
  }


];

const jobSummary =
  "As a junior Full Stack Developer with a degree in Software Engineering, I bring a solid foundation in both front-end and back-end technologies. My skills include PHP, SQL Server, and C#, with practical experience in deploying and hosting applications. I’m proficient in React.js for creating dynamic user interfaces and experienced in web scraping with Python. Passionate about delivering seamless user experiences, I focus on feature optimization and effective problem-solving. Eager to contribute to innovative projects, I am committed to applying my skills and attention to detail in every development challenge. Currently, I am enhancing my expertise through a course in C#, ASP.NET MVC, and MS SQL, which also covers advanced topics in object-oriented programming and DevOps practices for efficient software deployment and hosting.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Software Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
