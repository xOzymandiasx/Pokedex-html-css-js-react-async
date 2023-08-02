import "../styles/pokeCardDetail.css"

const PokeCardDetail = ({ pokedex }) => {
  const { name, sprites, types, moves, stats, weight } = pokedex[0];
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
  const liStyles = {
    backgroundImage: `linear-gradient(${
      typeColor[types[0].type.name]
    }, whitesmoke 75%)`,
    border: `1px solid ${typeColor[types[0].type.name]}`,
  };

  return (
    <div style={liStyles} className="main-container">
      <div>
        <img src={sprites.other.dream_world.front_default} alt={name} />
        <h3 className="poke-name">{name}</h3>
      </div>
      <div className="card-detail">
        <h4>Type</h4>
        <p className="types-p">
          {types.map((type, index) => <span className="type-span-card-detail" key={index} style={{backgroundColor: typeColor[`${type.type.name}`]}}>{type.type.name}</span>)}
        </p>
        <h4>Moves</h4>  
        <p><span className="span-moves">{moves[0].move.name}</span> <span className="span-moves">{moves[1].move.name}</span></p>
        <h4>Stats</h4>
        <p><span className="hp-span">hp: {stats[0].base_stat}</span> <span className="attack-span">attack: {stats[1].base_stat}</span> <span className="defense-span">defense: {stats[2].base_stat}</span></p>
        <h4>Weigth</h4>
        <p><span className="weight-span">{weight / 10} kgs.</span></p>
      </div>
    </div>
  );
};

export default PokeCardDetail;
