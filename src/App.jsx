import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import CardList from "./container/CardList/CardList"
import React, { useState, useEffect } from "react";



const App = () => {

   const [beerArray, setBeerArray] = useState([]);
   const [validSearch, setValidSearch] = useState(true)
   const [searchTerm, setSearchTerm] = useState("");
   const [searchABV, setsearchABV] = useState("");
   const [searchClassic, setSearchClassic] = useState("");
   const [searchAcidic, setSearchAcidic] = useState("");


   useEffect(() => {
      const URL = `https://api.punkapi.com/v2/beers?per_page=40${searchTerm}${searchABV}${searchClassic}`
      fetch(URL).then(response => {
         console.log(response.status)
         if (response.status !== 200) {
            setValidSearch(false)
            return Promise.reject("error");
         } else {
            setValidSearch(true)
            return response.json();
         }
      }).then(beerArray => {

         if (searchAcidic === "filter") {
            setBeerArray(beerArray.filter(beer => beer.ph < 4 && beer.ph != null))
         } else {
            // console.log(beerArray)
            setBeerArray(beerArray)
         }
      }).catch(error => {
         console.log(error)
      })
   }, [searchTerm, searchABV, searchClassic, searchAcidic])


   const handleInput = event => {
      if (event.target.value === "") {
         setSearchTerm("");
      } else {
         const cleanInput = event.target.value.toLowerCase().replace(" ", "_");
         console.log(cleanInput)
         setSearchTerm("&beer_name=" + cleanInput);
      }
   };

   const handleClick = (search, setSearch, pagination) => {
      if (search === "") {
         setSearch(pagination)
      } else if (search === pagination) {
         setSearch("")
      }
   }

   const filterABV = () => {
      handleClick(searchABV, setsearchABV, "&abv_gt=6")
   }

   const filterClassic = () => {
      handleClick(searchClassic, setSearchClassic, "&brewed_before=01-2010")
   }

   const filterPh = () => {
      handleClick(searchAcidic, setSearchAcidic, "filter")
   }


   // console.log(filterPh)
   console.log(beerArray)

   return (
      <div className="App">
         <Navbar label={"beers"} seacherTerm={searchTerm} handleInput={handleInput} filterABV={filterABV} filterClassic={filterClassic} filterPh={filterPh} />
         {validSearch && <CardList beerArray={beerArray} />}
         {!validSearch && <p className='App__error'>Invalid Search Parameters</p>}
      </div>
   );
}

export default App;
