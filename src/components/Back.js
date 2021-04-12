import { useHistory } from "react-router";
import img from "./../img/back.svg"

const Back = () => {
    const history = useHistory();
    return ( 
        <div className="back-btn" onClick={history.goBack}><img src={img} alt="back"></img></div>
    );
}
 
export default Back;