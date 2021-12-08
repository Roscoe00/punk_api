import React from "react";
import "./CardList.scss";
import Card from "../../Components/main/Card/Card";


const CardList = props => {

   const { beerArray } = props;

   const CardListJSX = beerArray.map((beer) => (
      <div className={"beerCard beerCard__" + beer.id} key={"beer" + beer.id}>
         <Card image={beer.image_url} beerBrand={beer.name} beerDesc={beer.description} />
      </div>
   ))

   return (
      <div className="completed-card">
         {CardListJSX}
      </div>
   )
}

export default CardList