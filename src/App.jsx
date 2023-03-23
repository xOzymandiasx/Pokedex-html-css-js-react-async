import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import PokeCardList from "./components/PokeCardList";
import PokeForm from "./components/PokeForm";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pokePage, setPokePage] = useState(0);
  const [searching, setSearching] = useState(false);

  let effectRan = false;

  const pokeUrl = (page=0) =>
    `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=12`;

  const getAllPokemons = async () => {
    setLoader(true);
    const { data } = await axios.get(pokeUrl());
    let newPokePage = [];
    for (let poke of data.results) {
      const { data } = await axios.get(poke.url);
      newPokePage.push(data);
    }
    setLoader(false);
    setPokedex(newPokePage);
  };

  useEffect(() => {
    if (effectRan === false) {
      getAllPokemons();
    }
    return () => {
      effectRan = true;
    };
  }, []);

  return (
    <div className="main-div">
      <h1>Pokedex</h1>
      <PokeForm setPokedex={setPokedex} getAllPokemons= {getAllPokemons} setPokePage={setPokePage} setSearching={setSearching}/>
      <PokeCardList pokedex={pokedex} setPokedex={setPokedex} pokeUrl={pokeUrl} loader={loader} setLoader={setLoader} pokePage={pokePage} setPokePage={setPokePage} searching={searching}/>
    </div>
  );
}

export default App;
