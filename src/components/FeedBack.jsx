import { useState } from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { feedback } from "../data";

const FeedBack = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = feedback[index];

  const prevFeedbackHandler = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(feedback.length - 1);
    }
  };

  const nextFeedbackHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= feedback.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="feedbacks">
      <div className="container feedback__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Atsiliepimai"
          className="feedback__head"
        />
        <Card className="feedback">
          <div className="feedback__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="feedback__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="feedback__title">{job}</small>
        </Card>
        <div className="feedback__btn-container">
          <button className="feedback__btn" onClick={prevFeedbackHandler}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="feedback__btn" onClick={nextFeedbackHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
