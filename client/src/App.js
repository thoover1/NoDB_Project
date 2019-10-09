import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import fantasyfootball2 from "./Components/fantasyfootball2.jpg";
import PlayerList from "./Components/PlayerList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // allPlayers: [],
      players: []
    };
    this.getPlayers = this.getPlayers.bind(this);
    this.postPlayer = this.postPlayer.bind(this);
  }

  componentDidMount() {
    // this.getAllPlayers();
    this.getPlayers();
  }

  // getAllPlayers() {
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
          // allPlayers: response.data
          players: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { players } = this.state;
    return (
      <div className="App">
        <div>
          <img src={fantasyfootball2} alt="" />
        </div>
        {/* <div>{mappedPlayers}</div> */}
        <h1>Waiver Wire Wizard</h1>
        <div>
          <ol>
            {players.map(player => {
              return (
                <li>
                  <div>{player.id}</div>
                  <div>{player.name}</div>
                  <div>{player.position}</div>
                  <div>{player.comments}</div>
                </li>
              );
            })}
          </ol>
        </div>
        <PlayerList postPlayer={this.postPlayer} />
      </div>
      // const { allPlayers } = this.state;
      // console.log(players);
      // const mappedPlayers = allPlayers.map(player => {
      //   return (
      //     <div key={player.id}>
      //       <div>{player.playerName}</div>
      //       <div>{player.name}</div>
      //       <div className="image-container">
      //       </div>
      //     </div>
      //   );
      // });
    );
  }
}

export default App;
