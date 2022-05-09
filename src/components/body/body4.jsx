import "../../css/body4.css";
import Twop from "../../styles/twop.png";
function Body4() {
  return (
    <>
      <div className="body4">
        <div className="personal12">
          <h3 className="personal">A personal commerce</h3>
          <h3 className="expert">expert at your fingertips</h3>
        </div>
        <div className="twopD">
          <img className="twop" src={Twop} />
          <p className="twopp">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Suspendisse varius enim in <br /> eros elementum tristique. Duis
            cursus, mi <br /> quis viverra ornare, eros dolor interdum <br />{" "}
            nulla, ut commodo diam libero vitae erat.
          </p>
          <button className="getS">Get started</button>
        </div>
      </div>
    </>
  );
}
export default Body4;
