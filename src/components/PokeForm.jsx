import axios from "axios";
import React from "react";
import "../styles/pokeForm.css"

const PokeForm = ({setPokedex, getAllPokemons}) => {

  const urlSearch = axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151");

  const handleChange = async (e) => {
    if (e.target.value === "") {
      getAllPokemons();
      return;
    };
    const {data} = await urlSearch;
    let pokeSearch = [];
    for (let poke of data.results) {
      if (poke.name.startsWith(e.target.value)) {
        const {data} = await axios.get(poke.url);
        pokeSearch.push(data);
      }
    }
    setPokedex(pokeSearch);
  };

  return (
    <form>
      <label htmlFor="poke">
        <input type="text" name="poke" id="poke" placeholder="Pokesearch" onChange={handleChange}/>
      </label>
    </form>
  );
};

export default PokeForm;
