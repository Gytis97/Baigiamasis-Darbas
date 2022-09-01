import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>

          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank "
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <Link to="/apie">
            <h4>Apie</h4>
          </Link>
          <Link to="/planai">
            <h4>Planai</h4>
          </Link>
          <Link to="/treneriai">
            <h4>Treneriai</h4>
          </Link>
          <Link to="/galerija">
            <h4>Galerija</h4>
          </Link>
          <Link to="/kontaktai">
            <h4>Kontaktai</h4>
          </Link>
        </article>
        <article className="footer__info">
          <h4>AnyTimeFitness</h4>
          <ul>
            <li>
              <strong>Darbo laikas: </strong>
            </li>
            <li>24/7</li>
            <li>
              <strong>Adresas: </strong>
            </li>
            <li>Kaunas pr. 89a</li>
            <li>
              <strong>El. Paštas: </strong>
            </li>
            <li>info@anytimefitness.lt</li>
          </ul>
        </article>
        <article>
          <h4>Susisiekite:</h4>
          <Link to="/kontaktai">
            <strong>Kontaktai</strong>
          </Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          2022 Sporto Klubas Kaune AnyTimeFitness &copy; Visos Teisės Saugomos{" "}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
