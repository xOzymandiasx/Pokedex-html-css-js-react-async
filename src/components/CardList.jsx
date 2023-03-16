import React from "react";
import "../styles/cardList.css";

const CardList = ({ pokedex }) => {
  const { name, sprites, types } = pokedex;

  return (
    <ul>
      <li>
        <img src={sprites.front_default} alt={name} />
        <p>{name}</p>
        <div>
          {types.map(type => <span>{type.type.name}</span>)}
        </div>
      </li>
    </ul>
  );
};

export default CardList;
