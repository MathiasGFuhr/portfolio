import './home.css';
import mainImg from '../../../public/assets/mainImg.png';
import { Button } from '../../components/Button';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Home = () => {
  return (
    <main>
      <div className="content">
        <span>Hi I am</span>
        <h2>Mahmood Fazile</h2>
        <h1>Frontend Developer</h1>

        <div>
          <ul className='socialLinks'>
            <li><a href="https://www.linkedin.com/in/mathiasgilvanfuhr/" target="_blank"><FaLinkedin /></a></li>
            <li><a href="https://github.com/MathiasGFuhr" target="_blank"><FaGithub /></a></li>
            <li><a href=""><FaWhatsapp /></a></li>
          </ul>
        </div>

        <div className="buttons">
          <Button type="whatsapp" label="Hire Me" />
          <Button type="download" label="Downlead CV " />
        </div>

      </div>
      <div className="img">
        <img src={mainImg} alt="" />
      </div>
    </main>
  );
};