import "../../css/body2.css";
import Salma1 from "../../styles/salama1.png";
import Salma2 from "../../styles/salma2.png";
import Salma3 from "../../styles/salam3.png";

function Body2() {
  return (
    <div className="body2">
      <img className="salama1" src={Salma1} />
      <img className="salama2" src={Salma2} />
      <img className="salama3" src={Salma3} />
      <div className="dP">
        <p className="salma1P">Hard BOILED Egg and Avocado</p>
        <p className="d_99">$ 7.99 USD</p>
        <p className="d_5">$ 5.00 USD</p>
        <p className="bomb">BOMB! Enamel Pin</p>
        <p className="bomb2">$ 7.12 USD</p>
        <p className="pineple">Pineapple Charm Pendant</p>
        <p className="pineple9">$ 9.99 USD</p>
      </div>
    </div>
  );
}
export default Body2;
