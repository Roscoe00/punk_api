import React from "react";
import "./CardList.scss";
import Card from "../../Components/main/Card/Card";


const CardList = props =>{

   const {image,beerBrand,beerDesc} = props;

      return(
      <div className="completed-card">
      <Card image={image} beerBrand={beerBrand} beerDesc={beerDesc}/>
      </div>
      )
}

export default CardList