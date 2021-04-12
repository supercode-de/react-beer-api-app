import { Link } from "react-router-dom"

const Card = (props) => {
    const { name, _id, contributed_by, image_url, tagline } = props.data;
    return (
        <div className="card">
            <div className="img-holder">
                <img src={image_url}></img>
            </div>
            <div className="content">
                <h2>{name}</h2>
                <h4>{tagline}</h4>
                <div class="by">{contributed_by}</div>
                <Link className="btn" to={`/beer/${_id}`}>Details</Link>
            </div>
        </div>
    );
}
 
export default Card;