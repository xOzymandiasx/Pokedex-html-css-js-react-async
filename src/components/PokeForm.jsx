import axios from "axios";
import React from "react";
import "../styles/pokeForm.css"

const PokeForm = ({setPokedex, getAllPokemons, setPokePage, setSearching}) => {

  const urlSearch = axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151");

  const handleChange = async (e) => {
    if (e.target.value === "") {
      getAllPokemons();
      setSearching(false)
      setPokePage(0);
      return;
    };
    if(e.target.value.length > 0) setSearching(true);
    const {data} = await urlSearch;
    let pokeSearch = [];
    for (let poke of data.results) {
      if (poke.name.startsWith(e.target.value.trim().toLowerCase())) {
        const {data} = await axios.get(poke.url);
        pokeSearch.push(data);
      };
    };
    setPokedex(pokeSearch);
  };

  return (
    <form>
      <label htmlFor="poke">
        <input type="text" name="poke" id="poke" placeholder="Pokesearch (Only 151 originals)" onChange={handleChange}/>
      </label>
    </form>
  );
};

export default PokeForm;
