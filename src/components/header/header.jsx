import Header1 from "./header1";
import Header2 from "./header2"; 
import "../../css/header1.css"


function Header() {
  return <div className="container">
      <Header1/> 
      <Header2/>
  </div>;
}
export default Header;