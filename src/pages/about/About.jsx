import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="Apie Mus" image={HeaderImage}>
        Fizinis aktyvumas - tai veiksnys, kuris formuoja žmogaus organizmą ir jo
        funkcijas. Jis ugdo ir stiprina visas organizmo sistemas, veikia jų
        sudėtį ir gyvybingumą. Žmogui fizinio aktyvumo reikia lygiai taip pat,
        kaip maisto ir oro - tai ypač svarbu vaikams, kurie intensyviai auga,
        tvirtėja ir tobulėja.
      </Header>
      <div className="about__container">
        <section className="about__story">
          <div className="about__story-container">
            <div className="about__section-image">
              <img src={StoryImage} alt="Story image" />
            </div>
            <div className="about__section-content">
              <h1>Mūsų Istorija</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores laboriosam, ad sint impedit excepturi non! Cum odit,
                totam porro, veritatis modi aliquid nihil earum eriores
                laboriosam, ad sint impedit excepturi non! Cum odit,
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores laboriosam, ad sint impedit excepturi non! Cum odit,
                totam porro, veritatis modi o, veritatis modi
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores laboriosam, ad.
              </p>
            </div>
          </div>
        </section>
        <section className="about__vision">
          <div className="about__vision-container">
            <div className="about__section-content">
              <h1>Mūsų Vizija</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores laboriosam, ad sint impedit excepturi non! Cum odit,
                totam porro, veritatis modi aliquid nihil earum eriores
                laboriosam, ad sint impedit excepturi non! Cum odit,
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores laboriosam, ad sint impedit excepturi non! Cum odit,
                totam porro, veritatis modi o, veritatis modi
              </p>
            </div>
            <div className="about__section-image">
              <img src={VisionImage} alt="Vision Image" />
            </div>
          </div>
        </section>
        <section className="about__mission">
          <div className="about__mission-container">
            <div className="about__section-image">
              <img src={MissionImage} alt="Mission image" />
            </div>
            <div className="about__section-content">
              <h1>Mūsų Misija</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores laboriosam, ad sint impedit excepturi non! Cum odit,
                totam porro, veritatis modi aliquid nihil earum eriores
                laboriosam, ad sint impedit excepturi non! Cum odit,
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores laboriosam, ad sint impedit excepturi non! Cum odit,
                totam porro, veritatis modi o, veritatis modi
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores laboriosam, ad.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
