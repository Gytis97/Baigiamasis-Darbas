import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Susisiekite" image={HeaderImage}>
        <p className="contact__headerp">
          Jeigu kilo klausimu susijusių su sporto klubu, ar turite įdėjų kurias
          norėtumėte įgyvendinti kartu su mumis - rašykite apačioje.
        </p>

        <form>
          <div className="input__name">
            <input
              type="text"
              name="First Name"
              placeholder="Jūsų Vardas"
              required
            />
          </div>
          <div className="input__email">
            <input
              type="email"
              name="Email Address"
              placeholder="Jūsų el. paštas"
              required
            />
          </div>
          <div className="message__input">
            <textarea rows="4" placeholder="Jūsų tekstas"></textarea>
          </div>
          <div className="input__btn">
            <button className="btn">Siųsti</button>
          </div>
        </form>
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:" target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="mailto:" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="mailto:" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
