import React, { Component } from "react";
import "./PlayerList.css";
import axios from "axios";
// import EditButton from "./EditButton/EditButton";
import DeleteButton from "./DeleteButton/DeleteButton";

export default class PlayerList extends Component {
  constructor(props) {
    super(props);

    // this.putPlayer = this.putPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  deletePlayer(id) {
    axios.delete(`/api/players/${id}`).then(response => {
      document.getElementById(id).remove();
      this.setState({ players: response.data });
    });
  }

  render() {
    const mappedPlayers = this.props.getPlayers;
    return (
      <div className="allPlayers">
        {mappedPlayers.map(player => {
          return (
            <div key={player.id}>
              <ol className="player" id={player.id}>
                {/* TO DO: link each player ID using href */}
                <a className="player_list_numbering">{player.id}</a>
                <p>
                  {player.name},{player.position}
                </p>
                <textarea>{player.comments}</textarea>
                <DeleteButton
                  id={player.id}
                  deletePlayerFn={this.deletePlayer}
                />
                {/* <EditButton
                  id={player.id}
                  name={player.name}
                  position={player.position}
                  comments={player.comments}
                  editPlayerFn={this.putPlayer}
                /> */}
              </ol>
            </div>
          );
        })}
      </div>
    );
  }
}
