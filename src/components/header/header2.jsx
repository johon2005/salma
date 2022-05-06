import "../../css/header2.css"
function Header2() {
  return (
    <>
      <div className="container2">
        <a className="home">HOME</a>
        <a className="shop">SHOP</a>
        <a className="about">ABOUT</a>
        <a className="journal">JOURNAL</a>
        <a className="contact">CONCTACT</a>
      </div>
      <div className="hamburger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
        </svg>
      </div>
      <div className="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
      </div>
    </>
  );
}
export default Header2;
