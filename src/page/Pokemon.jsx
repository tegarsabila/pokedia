import React from "react";
import PokemonList from "../containers/pokemon-list";
import PokemonDetails from "../containers/pokemon-detail";

function Pokemon() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="containerScroll">
          <div className="scroll">
            <PokemonList />
          </div>
          <div className="detailpoke">
            <PokemonDetails />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Pokemon;

