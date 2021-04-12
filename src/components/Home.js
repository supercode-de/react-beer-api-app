import { Link } from "react-router-dom";
import all from "./../img/all.jpg"
import random from "./../img/random.jpg"

const Home = () => {
    return (
        <div className="home">
            <Link to="/beer"><img src={all} alt="all"></img><span>AllBeers</span></Link>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
            <Link to="/beer/random"><img src={random} alt="random"></img><span>Random</span></Link>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>
    );
}
 
export default Home;