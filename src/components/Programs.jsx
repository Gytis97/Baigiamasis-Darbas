import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Sporto Programos" />

        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info }) => {
            return (
              <Card className="programs__program" key={id} id={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
