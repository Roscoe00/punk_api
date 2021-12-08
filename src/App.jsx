import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import CardList from "./container/CardList/CardList"
import React, { useState, useEffect } from "react";



const App = () => {

   const [beerArray, setBeerArray] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");


   const handleInput = event => {
      const cleanInput = event.target.value.toLowerCase();
      // console.log(cleanInput)
      setSearchTerm(cleanInput);
   };


   useEffect(() => {
      if (searchTerm === "") {
         const URL = `https://api.punkapi.com/v2/beers/`
         fetch(URL).then(response => {
            return response.json();
         }).then(beerArray => {
            // console.log(beerArray)
            setBeerArray(beerArray)
         })
      } else {
         const NewURL = `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`;
         fetch(NewURL).then(response => {
            return response.json();
         }).then(beerArray => {
            // console.log(beerArray)
            setBeerArray(beerArray)
         })

      }
   }, [searchTerm])

   console.log(beerArray)

   return (
      <div className="App">
         <Navbar label={"beers"} seacherTerm={searchTerm} handleInput={handleInput} />
         <CardList beerArray={beerArray} />
      </div>
   );
}

export default App;
