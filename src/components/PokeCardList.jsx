import React, { useState } from 'react';
import CardList from './CardList';
import "../styles/pokeCardList.css";
import axios from 'axios';

const PokeCardList = ({pokedex, setPokedex, pokeUrl}) => {

  const [pokePage, setPokePage] = useState(0);

  const changePage = async (e) => {
    let actualPage = pokePage;
    // if ( pokePage === 131 && e.target.innerHTML === "Previus") {
    //   actualPage = 120;
    //   setPokePage(120);
    // } else if (pokePage === 120 && e.target.innerHTML === "Next") {
    //   actualPage = 131;
    //   setPokePage(131);
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
    }

    if (newPokePage[10].name === "mew") newPokePage.splice(11, 20);

    setPokedex(newPokePage);
  }

  return (
    <div>
      {pokedex.map(poke =><CardList pokedex={poke}/>)}
      {pokePage > 0 && <button onClick={changePage}>Previus</button>}
      <button onClick={changePage}>Next</button>    
    </div>
  )
}

export default PokeCardList;