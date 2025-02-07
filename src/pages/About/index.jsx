import { Button } from "../../components/Button";
import './About.css'
import AvatarImg from '../../../public/assets/mainImg.png'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const technologies = [
  { id: 1, icon: <FaHtml5 />, name: "HTML" },
  { id: 2, icon: <FaCss3Alt />, name: "CSS" },
  { id: 3, icon: <FaJs />, name: "JavaScript" },
  { id: 4, icon: <FaReact />, name: "React" },
  { id: 5, icon: <SiTailwindcss />, name: "Tailwindcss" },
  { id: 6, icon: <SiTypescript />, name: "TypeScript" },
];

export const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p className="description">I am a frontend developer with a passion for creating user-friendly and visually appealing interfaces.</p>

      <div className="about-content">
        <div className="img">
          <img src={AvatarImg} alt="" />
        </div>
        <div className="content">
          <p className="text">A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications..</p>
          <Button type="download" label="Download CV" />


          <div className="technologies">
            <ul>
              {technologies.map((tech) => (
                <li key={tech.id}>
                  <div className="icon">
                    {tech.icon}
                  </div>
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};