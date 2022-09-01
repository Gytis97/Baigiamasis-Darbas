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
        Jeigu kilo klausimu susijusių su sporto klubu, ar turite įdėjų kurias
        norėtumėte įgyvendinti kartu su mumis - rašykite apačioje.
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
