import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";

import "./contact.css";

const Contact = () => {
  const [index, setIndex] = useState(false);
  const [name, setName] = useState(false);
  const [textarea, setTextarea] = useState(false);

  const prevFeedbackHandler = () => {
    var email = document.getElementById("emailInput").value;
    var name = document.getElementById("textInput").value;
    var textarea = document.getElementById("areaInput").value;
    if (email === "") {
      setIndex(true);
    }
    if (email !== "") {
      setIndex(false);
    }

    if (name === "") {
      setName(true);
    }
    if (name !== "") {
      setName(false);
    }

    if (textarea === "") {
      setTextarea(true);
    }
    if (textarea !== "") {
      setTextarea(false);
    }
  };

  return (
    <>
      <Header image={HeaderImage}>
        <p className="header__text">
          Jeigu kilo klausimu susijusių su sporto klubu, ar turite įdėjų kurias
          norėtumėte įgyvendinti kartu - rašykite apačioje.
        </p>

        <form className="forms">
          <div className="input__name">
            <input
              id="textInput"
              type="text"
              name="First Name"
              placeholder="Jūsų Vardas"
              required
            />
          </div>

          <span className={name ? "show" : "validation"}>
            užpildykite laukelį
          </span>
          <div className="input__email">
            <input
              id="emailInput"
              type="email"
              name="Email Address"
              placeholder="Jūsų el. paštas"
              required
            />
          </div>
          <span className={index ? "show" : "validation"}>
            užpildykite laukelį
          </span>
          <div className="message__input">
            <textarea
              id="areaInput"
              rows="4"
              placeholder="Jūsų tekstas"
              required
            ></textarea>
          </div>
          <span className={textarea ? "show" : "validation"}>
            užpildykite laukelį
          </span>
          <div className="input__btn">
            <button className="btn" onClick={prevFeedbackHandler}>
              Siųsti
            </button>
          </div>
        </form>
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:" target="_blank" rel="noreferrer noopener">
              <BsInstagram />
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
