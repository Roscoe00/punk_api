import beers from "../../../Data/data";
import Card from "./Card/Card";

const CardList = () =>{
   const CardListJSX = beers.map((beer)=>(
      <div className="completed-card" key={"beer" + beer.id}>
      <Card image={beer.image_url} beerBrand={beer.name} beerDesc={beer.description}/>
      </div>
   ))
   return( <>
      {CardListJSX}
      </>)
}

export default CardList