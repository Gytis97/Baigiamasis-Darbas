import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Prisijunk prie AnytimeFitness komandos!</h1>
          <p>
            Nelauk rytojaus, jau šiandien ateik į „AnytimeFitness“.
            <br />
            Registruokis dabar!
          </p>
          <Link to="/planai" className="btn lg">
            Treniruočių planai
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
