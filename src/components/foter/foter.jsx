import "../../css/foter.css";
import Foterw from "../../styles/foterW.png";
import Foterh from "../../styles/foterH.png";
import Email from "../../styles/email.png";
import Navigit from "../../styles/navigiti.png";
import Phone from "../../styles/phone.png";
import Vector from "../../styles/Vector.png";
import Apple from "../../styles/XMLID_34_.png";
function Foter() {
  return (
    <>
      <div className="foterBoss">
        <img className="foterw" src={Foterw} />
      </div>
      <div className="boss">
        <div className="emailD">
          <img className="email" src={Email} />
          <p className="pp">Email</p>
          <p className="emailp">hello@template.com</p>
        </div>
        <div className="navigitD">
          <img className="navigit" src={Navigit} />
          <p className="showroom">Showroom</p>
          <p className="prinz">Prinzregentenstrasse 1</p>
          <p className="munich">80538 Munich · Germany</p>
        </div>
        <div className="phoneD">
          <img className="phone" src={Phone} />
          <p className="phonep">Phone</p>
          <p className="number">+49·34·376·839·0</p>
        </div>
      </div>
      <div className="vectorD">
        <img className="vector" src={Vector} />
        <h3>Trustpilot</h3>
        <p className="rating">Rating on Trustpilot 4.75 · 5</p>
        <a href="https://pay.google.com/intl/ru_ru/about/">
          <svg
            className="gogle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"
              fill="rgba(181,177,61,1)"
            />
          </svg>
          
        </a>
        <a href="https://www.apple.com/apple-pay/">
          <img className="apple" src={Apple} />
        </a>
        <a href="https://www.paynpay.io/">
          <svg
            className="pay"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M8.495 20.667h1.551l.538-3.376a2.805 2.805 0 0 1 2.77-2.366h.5c2.677 0 4.06-.983 4.55-3.503.208-1.066.117-1.73-.171-2.102-1.207 3.054-3.79 4.16-6.962 4.16h-.884c-.384 0-.794.209-.852.58l-1.04 6.607zm-4.944-.294a.551.551 0 0 1-.544-.637L5.68 2.776A.92.92 0 0 1 6.59 2h6.424c2.212 0 3.942.467 4.899 1.558.87.99 1.123 2.084.871 3.692.36.191.668.425.916.706.818.933.978 2.26.668 3.85-.74 3.805-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.679l-.702 4.383a.804.804 0 0 1-.794.679H6.72a.483.483 0 0 1-.477-.558l.274-1.736H3.55zm6.836-8.894h.884c3.19 0 4.895-1.212 5.483-4.229.02-.101.037-.203.053-.309.166-1.06.05-1.553-.398-2.063-.465-.53-1.603-.878-3.396-.878h-5.5L5.246 18.373h1.561l.73-4.628.007.001a2.915 2.915 0 0 1 2.843-2.267z" />
          </svg>
        </a>
      </div>
    </>
  );
}
export default Foter;
