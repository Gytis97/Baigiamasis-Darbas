import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header title="Narysčių Planai" image={HeaderImage}>
        Čia rasite pagal jūsų poreikius atitinkančius planus pradedant sportuoti
        mūsų sporto klube.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, price, features, desc }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`€${price}`}</h1>
                <h2>/mėn</h2>

                {features.map(({ feature, available }, index) => {
                  console.log(index);
                  return (
                    <p key={index} className={available ? "" : "disabled"}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Pasirinkti Planą</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
