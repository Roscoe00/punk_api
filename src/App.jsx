import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import CardList from "./container/CardList/CardList"
import React,{useState ,useEffect}  from "react";


function App() {

     const [beerArray,setBeerArray] = useState([]);
  
     useEffect(() =>{
        const URL =`https://api.punkapi.com/v2/beers`
        fetch(URL).then(response => {
           return response.json();
        }).then(beerArray =>{
           // console.log(beerArray)
           setBeerArray(beerArray)
        })
     },)
  
     const CardListJSX = beerArray.map((beer)=>(
        <div className="main-display" key={"beer" + beer.id}>
          <CardList image={beer.image_url} beerBrand={beer.name} beerDesc={beer.description} />
        </div>
     ))
    
  
  return (
    <div className="App">
      <Navbar />
      {CardListJSX}
        </div>
  );
}

export default App;
