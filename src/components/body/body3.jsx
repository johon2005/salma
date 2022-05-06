import "../../css/body3.css";
import Img1 from "../../styles/img1.png";
import Img2 from "../../styles/img2.png";
import Img3 from "../../styles/img3.png";
import Img4 from "../../styles/img4.png";
import Img5 from "../../styles/img5.png";
function Body3() {
  return (
    <div>
      <div className="dimg1">
        <h2 className="power">
          From our
          <br />
          powerhouse <br />
          to your house.
        </h2>
        <img className="img11" src={Img1} />
        <p className="img1P1">
          Use this text to <br /> describe the first <br /> step...
        </p>
      </div>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
        Suspendisse varius enim in <br /> eros elementum tristique.
      </p>
      <div className="img2D">
        <img className="img2" src={Img2} />
        <p className="theS">
          ...the second step is <br /> following here...
        </p>
        <img className="img3" src={Img3} />
        <p className="aand">...aaand the third one...</p>
      </div>
      <div className="img4D">
        <img className="img4" src={Img4} />
        <p className="thisIS">
          ...This is the last fourth <br /> step of how it works.
        </p>
      </div>
      <p className="getTH">Get the rest of the story</p>{" "}
      <div className="img5D">
        <img className="img5" src={Img5} />
        <p  className="bestT">
          “Best templates and support out <br /> there! They are always happy to
          help <br />
          with any issues you may be having or <br /> even just showing how to
          edit things.”
        </p>
      </div>
    </div>
  );
}
export default Body3;
