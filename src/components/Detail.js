import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBeer, getRandomBeer } from "../BeerAPI";
import Back from "./Back";

const Detail = () => {
   
    const { id } = useParams();
    const [beer, setBeer] = useState();

    useEffect(() => {
        if (id) {
            getBeer(id).then(response => setBeer(response))
        } else {
            getRandomBeer().then(response => setBeer(response))
        }
    }, [id]);

    if (!beer) return (<>Loading...</>);

    const { name, tagline, description, image_url, first_brewed, attenuation_level } = beer;

    return (
        <div className="detail">
            <img src={image_url}></img>
            <h2>{name}</h2>
            <h4>{tagline}</h4>
            <div className="meta">
                <div>First brewed</div>
                <div>{first_brewed}</div>
                <div>Attenuation Level</div>
                <div>{attenuation_level}</div>
            </div>
            <p>{description}</p>
            <Back />
        </div>      
    )
}

export default Detail;