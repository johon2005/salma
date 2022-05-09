import "../../css/body5.css";
import Width5 from "../../styles/rectangle5.png";
import Qora from "../../styles/qora.png";
import RectB1 from "../../styles/rectbody.png";
import Orp from "../../styles/Orp.png";
import Bcurly from "../../styles/Bcurly.png";
import TwoR from "../../styles/twoRed.png";
function Body5() {
  return (
    <>
      <div className="body5">
        <p className="you_H">____________YOU HAVE QUESTIONS</p>
        <p className="we_H">We’ve got answers.</p>
        <div className="doUY">
          <div className="add1D">
            <p className="dd01">01 Do you offer educational discounts?</p>
            <p className="add1p">add</p>
          </div>
          <Rectangle5 />
          <div className="add1D">
            <p className="dd01"> 02 Which payment methods do you accept?</p>
            <p className="add1p">add</p>
          </div>
          <Rectangle5 />
          <div className="add1D">
            <p className="dd01">
              03I have a license. Can I switch to a subscription?
            </p>
            <p className="add1p">add</p>
          </div>
          <Rectangle5 />
        </div>
      </div>
      <div className="startDB">
        <button className="startF">Start free trial</button>
        <p className="trialD">30 day trial lorem ipsum dolor.</p>
      </div>
      <div>
        <p className="followS">
          Follow @salma <br /> on Instagram
        </p>
        <a href="https://www.instagram.com/">
          <button className="btnf">Follow @salma</button>
        </a>
      </div>
      <div className="photosD">
        <div
          style={{
            backgroundImage: `url(${Qora})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "630px",
            height: "260px",
            marginLeft: "144px",
          }}
        >
          <RectangleB5 />
        </div>
        <div
          style={{
            backgroundImage: `url(${Orp})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "630px",
            height: "260px",
            marginLeft: "-240px",
          }}
        >
          <RectangleB5 />
        </div>
        <div
          style={{
            backgroundImage: `url(${Bcurly})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "630px",
            height: "260px",
            marginLeft: "-240px",
          }}
        >
        </div> 
        <div
          style={{
            backgroundImage: `url(${TwoR})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "630px",
            height: "260px",
            marginLeft: "-240px",
          }}
        > 
        <RectangleB5/>
      </div> 
      </div>
    </>
  );
}
export default Body5;

export function Rectangle5() {
  return (
    <div>
      <img className="addW" src={Width5} />
    </div>
  );
}
export function RectangleB5() {
  return (
    <div className="rectD">
      <img className="rectB" src={RectB1} />
      <p className="thisIS">
        This is some text from your @instagram <br /> feed.
      </p>
    </div>
  );
}
