import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import "./home.css";
import FAQs from "../../components/FAQs";
import FeedBack from "../../components/FeedBack";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <FeedBack />
    </>
  );
};

export default Home;
