import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import PlayerAdd from "./Components/PlayerAdd/PlayerAdd";
// import PlayerList from "./Components/PlayerList/PlayerList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
    this.getPlayers = this.getPlayers.bind(this);
    this.postPlayer = this.postPlayer.bind(this);
    // this.putPlayer = this.putPlayer.bind(this);
    // this.deletePlayer = this.deletePlayer.bind(this);
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers() {
    axios
      .get("/api/players")
      .then(response => {
        this.setState({
          players: response.data
        });
      })
      .catch(err => console.log(err));
  }

  postPlayer(name, position, comments) {
    const newPlayer = {
      name,
      position,
      comments
    };
    axios
      .post(`/api/players`, newPlayer)
      .then(response => {
        this.setState({
          players: response.data
        });
      })
      .catch(err => console.log(err));
  }

  // putPlayer(name, position, comments) {
  //   const editPlayer = {
  //     name,
  //     position,
  //     comments
  //   };
  //   axios
  //     .put(`/api/players/${this.players.id}`, editPlayer)
  //     .then(response => {
  //       this.setState({
  //         players: response.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    const { players } = this.state;
    return (
      <div className="App">
        <header>
          <div className="header-left">
            <h1>Waiver Wire Wizard</h1>
            <div className="link-icon-row">
              <img></img>
              <img></img>
              <img></img>
              <img></img>
            </div>
          </div>
          <div className="header-right">
            <a href="#playerOne">#1</a>
            <a href="#playerTwo">#2</a>
            <a href="#playerThree">#3</a>
            <a href="#playerFour">#4</a>
            <a href="#playerFive">#5</a>
            <a href="#playerSix">#6</a>
            <a href="#playerSeven">#7</a>
            <a href="#playerEight">#8</a>
            <a href="#playerNine">#9</a>
            <a href="#playerTen">#10</a>
          </div>
        </header>
        <main className="main-container">
          <p>The website you shouldn't go to but can't help to...</p>
        </main>
        <PlayerList />
        <footer>
          <PlayerAdd postPlayer={this.postPlayer} />
        </footer>
      </div>
    );
  }
}

export default App;
