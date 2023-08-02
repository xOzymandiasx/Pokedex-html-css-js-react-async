import React from "react";
import "../styles/cardList.css";

const CardList = ({ pokedex, setPokedex }) => {
  const { name, sprites, types } = pokedex;
  const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
  const liStyle = {backgroundImage:`linear-gradient(${typeColor[types[0].type.name]}, whitesmoke 75%)`,
  border: `1px solid ${typeColor[types[0].type.name]}`,
  };

  const handleClick = () => {
    setPokedex([pokedex]);
  };

  return (
      <li onClick={handleClick} style={liStyle}>
        <img src={sprites.front_default} alt={name} />
        <h2>{name}</h2>
        <div className="type-container">
          {types.map((type, index) => <span key={index} className="type-span" style={{backgroundColor: typeColor[`${type.type.name}`]}}>{type.type.name}</span>)}
        </div>
      </li>
  );
};

export default CardList;
