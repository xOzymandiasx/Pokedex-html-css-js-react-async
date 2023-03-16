import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import PokeCardList from "./components/PokeCardList";
import PokeForm from "./components/PokeForm";

function App() {
  const [pokedex, setPokedex] = useState([]);
  let effectRan = false;

  const pokeUrl = (value) =>
    `https://pokeapi.co/api/v2/pokemon/?offset=${value}&limit=20`;

  const getAllPokemons = async () => {
    const { data } = await axios.get(pokeUrl(0));
    let newPokePage = [];
    for (let poke of data.results) {
      const { data } = await axios.get(poke.url);
      newPokePage.push(data);
    }
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
    <div>
      <h1>Pokedex</h1>
      <PokeForm />
      <PokeCardList pokedex={pokedex} setPokedex={setPokedex} pokeUrl={pokeUrl}/>
    </div>
  );
}

export default App;
