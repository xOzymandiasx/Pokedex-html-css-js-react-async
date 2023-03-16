import React from "react";

const PokeForm = () => {
  return (
    <form>
      <label htmlFor="poke">
        <input type="text" name="poke" id="poke" placeholder="Pokesearch" />
      </label>
    </form>
  );
};

export default PokeForm;
