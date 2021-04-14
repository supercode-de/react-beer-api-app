import { Link } from "react-router-dom";
import logo from "./../img/logo.svg";

const Nav = () => {
    return (
        <nav>
            <Link to="/"><img src={logo} alt="home"></img></Link>
        </nav>
    );
}
 
export default Nav;