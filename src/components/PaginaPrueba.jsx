import React, { useState } from 'react';
import CardList from './CardList';
import "../styles/pokeCardList.css";
import axios from 'axios';
import Loader from './Loader';

const PaginaPrueba = ({pokedex, setPokedex, pokeUrl}) => {

  const [pokePage, setPokePage] = useState(0);
  const [loader, setLoader] = useState(false);

  const changePage = async (e) => {
    setLoader(true);
    let actualPage = pokePage;
    if (e.target.innerHTML === "Previus") {
      actualPage -= 20;
      setPokePage(pokePage - 20);
    } else {
      actualPage += 20;
      setPokePage(pokePage + 20);
    } 
    const { data } = await axios.get(pokeUrl(actualPage));
    console.log(data.results);
    let newPokePage = [];
    for (let poke of data.results) {
      const { data } = await axios.get(poke.url);
      newPokePage.push(data);
      if (data.name === "mew") break;
    }
    setPokedex(newPokePage);
    setLoader(false);
  }

  return (
    <div>
      {loader ? <Loader /> : pokedex.map(poke =><CardList pokedex={poke}/>)}
      {/* {pokedex.map(poke =><CardList pokedex={poke}/>)} */}
      <div>       
        {pokePage > 0 && <button onClick={changePage}>Previus</button>}
        {pokePage < 140 && <button onClick={changePage}>Next</button>}    
      </div>
    </div>
  )
}

export default PaginaPrueba;