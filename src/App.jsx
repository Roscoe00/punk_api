import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import CardList from "./container/CardList/CardList"
import React, { useState, useEffect } from "react";



const App = () => {

   const [beerArray, setBeerArray] = useState([]);


   useEffect(() => {
      const URL = `https://api.punkapi.com/v2/beers/`
      fetch(URL).then(response => {
         return response.json();
      }).then(beerArray => {
         // console.log(beerArray)
         setBeerArray(beerArray)
      })
   }, [])


   const [searchTerm, setSearchTerm] = useState("");

   const handleInput = event => {
      const cleanInput = event.target.value.toLowerCase();
      console.log(cleanInput)
      setSearchTerm(cleanInput);
   };

   const filteredBeers = beerArray.filter(beer => {
      const beerNameLower = beer.name.toLowerCase();
      return beerNameLower.includes(searchTerm)
   });
   console.log(filteredBeers)



   const CardListJSX = filteredBeers.map((beer) => (
      <div className={"beerCard beerCard__" + beer.id} key={"beer" + beer.id}>
         <CardList image={beer.image_url} beerBrand={beer.name} beerDesc={beer.description} />
      </div>
   ))


   return (
      <div className="App">
         <Navbar label={"beers"} seacherTerm={searchTerm} handleInput={handleInput} />
         {CardListJSX}
      </div>
   );
}

export default App;
