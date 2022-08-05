import React, { Component } from "react";
import { connect } from "react-redux";

class PokemonDetails extends Component {
  renderData() {
    const poke_details = this.props.selectedPokemon;
    if (!poke_details.firstLoad) {
      if (!poke_details.isLoading) {
        return (
          <div className="containerDetail">
            <div className="poke is-link box">
              <div className="photo">
                <img
                  src={poke_details.data.result.image}
                  alt={poke_details.data.result.name}
                  width={200}
                />
              </div>
							<h1>{poke_details.data.result.name}</h1>
              <br />
              <h3>Ability:</h3>
              <ul>
                {(() => {
                  return poke_details.data.result.abilities.map((type) => {
                    return <li key={type}> {type}</li>;
                  });
                })()}
              </ul>
              <h3>Statistic:</h3>
              <ul>
                {(() => {
                  return poke_details.data.result.stats.map((stat) => {
                    return (
                      <li key={stat.name}>
                        {" "}
                        {stat.name}: {stat.value}
                      </li>
                    );
                  });
                })()}
              </ul>

              <h3>Type:</h3>
              <ul>
                {(() => {
                  return poke_details.data.result.types.map((type) => {
                    return <li key={type}> {type}</li>;
                  });
                })()}
              </ul>
            </div>
          </div>
        );
      } else return <div>Loading...</div>;
    } else return <div>Choose your pokemon</div>;
  }

  render() {
    console.log(this.props.selectedPokemon);
    return <div>{this.renderData()}</div>;
  }
}
function mapStateToProps(state) {
  return {
    selectedPokemon: state.selectedPokemon,
  };
}

export default connect(mapStateToProps)(PokemonDetails);

