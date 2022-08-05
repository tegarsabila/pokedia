import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPokemons, selectPokemon } from "../actions";

class PokemonList extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  renderList() {
    const poke_list = this.props.pokemons.data;
    if (!this.props.pokemons.isLoading) {
      return poke_list.result.map((pokemon) => {
        return (
          <div
            className="list"
            onClick={() => {
              this.props.selectPokemon(poke_list.result.indexOf(pokemon));
            }}
            key={pokemon.name}
          >
            <div className="pokemonimg">
              <img src={pokemon.pictureFront} width={60} />
            </div>
            <div className="pokemonname">
              <p>{pokemon.name}</p>
            </div>
          </div>
        );
      });
    } else return <span>Loading...</span>;
  }

  render() {
    if (!this.props.pokemons.isLoading) {
      console.log(this.props.pokemons.data);
    }
    return <div className="listpoke">{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPokemon, fetchPokemons }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

