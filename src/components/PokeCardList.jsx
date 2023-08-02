import React, { useState } from 'react';
import CardList from './CardList';
import "../styles/pokeCardList.css";
import axios from 'axios';
import Loader from './Loader';

const PokeCardList = ({pokedex, setPokedex, pokeUrl, loader, setLoader, pokePage, setPokePage, searching}) => {

  const changePage = async (e) => {
    setLoader(true);
    let actualPage = pokePage;
    if (e.target.innerHTML === "Previus") {
      actualPage -= 12;
      setPokePage(pokePage - 12);
    } else {
      actualPage += 12;
      setPokePage(pokePage + 12);
    } 
    const { data } = await axios.get(pokeUrl(actualPage));
    let newPokePage = [];
    for (let poke of data.results) {
      const { data } = await axios.get(poke.url);
      newPokePage.push(data);
      if (data.name === "mew") break;
    }
    setPokedex(newPokePage);
    setLoader(false);
  };

  return (
    <>
    <ul>
      {loader === false && pokedex.length === 0  
      ? <p>No se encontraron resultados</p> 
      : loader ? <Loader /> : pokedex.map((poke, index) => <CardList key={index} pokedex={poke} setPokedex={setPokedex}/>)}
    </ul>
    <div className='button-container'>
      {searching === false && pokePage > 0 && <button onClick={changePage}>Previus</button>}      
      {searching === false && pokePage < 140 && <button onClick={changePage}>Next</button>}    
    </div>
    </>
  );
};

export default PokeCardList;