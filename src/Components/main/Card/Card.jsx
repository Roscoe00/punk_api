import React from "react";
import "./Card.scss";

const Card = (props) =>{
   const {image,beerBrand,beerDesc} = props
   return(  <div className="beer-card">
   <img className="beer-card__image" src={image} alt="" />
      <h2 className="beer-card__title">{beerBrand}</h2>
      <p className="beer-card__desc">{beerDesc}</p>
      </div>
   )
}

export default Card