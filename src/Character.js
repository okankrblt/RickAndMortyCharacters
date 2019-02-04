import React, { Component } from "react";

export default class Character extends Component {
  state = {
    character: {
      name: "",
      status: "",
      type: "",
      gender: "",
      origin: "",
      url: ""
    }
  };

  characterFetch() {
    let character = "";
    fetch("https://rickandmortyapi.com/api/character/1")
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(response) {
        character = response;
      });

    this.setState = {
      name: character.name,
      status: character.status,
      type: character.species,
      gender: character.gender,
      origin: character.origin.name,
      url: character.image
    };
  }
  componentDidMount() {
    this.characterFetch();
  }

  render() {
    return (
      <div>
        <form>
          <img src={this.state.Url} alt={this.state.name} />
          <br />
          <label>Name: {this.state.name}</label>
          <br />
          <label>Status: {this.state.status}</label>
          <br />
          <label>Type: {this.state.type}</label>
          <br />
          <label>Gender: {this.state.gender}</label>
          <br />
          <label>Origin: {this.state.origin}</label>
        </form>
      </div>
    );
  }
}
