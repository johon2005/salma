import Curly2 from "../../styles/curly.png";
import "../../css/body1.css";
import Qora from "../../styles/qora.png";
import Bcurly from "../../styles/Bcurly.png";
import Rectangle from "../../styles/Rectangle.png";
import Width from "../../styles/width.png";
import Height2 from "../../styles/height.png";
function Body1() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Curly2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "1280px",
          height: "720px",
          marginLeft: "75px",
        }}
      >
        <p className="eco">Eco-Relax. Made with 100% GOTS</p>
        <p className="organic">
          Organic cotton,
          <br />
          free from harmful
          <br />
          substances.
        </p>
        <button className="Sbutton">Shop the Collection</button>
      </div>
      <div className="rasma">
        <div
          className="qora"
          style={{
            backgroundImage: `url(${Qora})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "630px",
            height: "710px",
            marginLeft: "75px",
            marginTop: "19px",
          }}
        >
          <Shop />

          <div
            style={{
              backgroundImage: `url(${Bcurly})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "630px",
              height: "720px",
              marginLeft: "650px",
              marginTop: "-580px",
            }}
          >
            <Shop />
          </div>
        </div>
      </div>
      <div>
        <p className="shH">
          Shop hundreds of enamel pins from artists. The best
          <br />
          cool pin badges to decorate your backpack, denim jean
          <br />
          jacket, lapel, and festival hat for sale in our online store.
        </p>
        <div className="boss123">
          <Width1 />
          <p className="asd">1 </p>
          <p className="cruetlyF">Cruelty Free</p>
          <p className="free">Free digital proofs and best design advice</p>
          <Height />
          <p className="p2">2</p>
          <p className="vegan100">100% Vegan</p>
          <p className="you_c">You can always start with 50 pcs here</p>
          <img className="youH" src={Height2} />
          <p className="d3iv">3</p>
          <p className="natural_3">Natural Ingredients</p>
          <p className="ge3t">Get excellent pins or have your money back</p>
          <img className="width2" src={Width} />
        </div>
      </div>
    </>
  );
}
export default Body1;
export function Shop() {
  return (
    <div>
      <p className="Bshop">Shop Bestsellers</p>
      <img className="rectSh" src={Rectangle} />
      <p className="shopRec">Shop now</p>
    </div>
  );
}
export function Width1() {
  return (
    <div className="width1">
      <img className="width1" src={Width} />
    </div>
  );
}
export function Height() {
  return (
    <div className="heightD">
      <img src={Height2} />
    </div>
  );
}
