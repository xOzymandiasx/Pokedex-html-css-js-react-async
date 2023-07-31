import React from "react";
import "../styles/cardList.css";

const CardList = ({ pokedex }) => {
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

  return (
      <li style={{backgroundImage:`linear-gradient(${typeColor[types[0].type.name]}, whitesmoke 75%)`,
      border: `1px solid ${typeColor[types[0].type.name]}`,
      }}>
        <img src={sprites.front_default} alt={name} />
        <h2>{name}</h2>
        <div className="type-container">
          {types.map((type, index) => <span key={index} style={{backgroundColor: typeColor[`${types[0].type.name}`]}}>{type.type.name}</span>)}
        </div>
      </li>
  );
};

export default CardList;
