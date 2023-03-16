import React, { useState } from 'react';
import CardList from './CardList';
import "../styles/pokeCardList.css";
import axios from 'axios';

const PokeCardList = ({pokedex, setPokedex, pokeUrl}) => {

  const [pokePage, setPokePage] = useState(0);

  const nextPage = async (e) => {
    let actualPage = pokePage;
    if (e.target.innerHTML === "Previus") {
      actualPage -= 20
      setPokePage(pokePage - 20);
    } else {
      actualPage += 20
      setPokePage(pokePage + 20);
    }  
    const { data } = await axios.get(pokeUrl(actualPage));
    console.log(data.results);
    let newPokePage = [];
    for (let poke of data.results) {
      const { data } = await axios.get(poke.url);
      newPokePage.push(data);
    }
    setPokedex(newPokePage);
  }

  return (
    <div>
      {pokedex.map(poke =><CardList pokedex={poke}/>)}
      <button onClick={nextPage}>Previus</button>
      <button onClick={nextPage}>Next</button>     
    </div>
  )
}

export default PokeCardList;