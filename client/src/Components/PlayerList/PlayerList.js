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
    console.log("*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    axios.delete(`/api/players?id=${id}`).then(response => {
      this.setState({ players: response.data });
    });
  }

  // putPlayer(id, name, position, comments) {
  //   axios.put(`/api/players?id=${id}`, {name, position, comments})
  // }

  render() {
    const mappedPlayers = this.props.getPlayers;
    // let increment_i = 0;
    return (
      <div className="allPlayers">
        {mappedPlayers.map(player => {
          let player_id = player.id;
          return (
            <ol className="player">
              {/* TO DO: link each player ID using href */}
              <a className="player_list_numbering">{player.id}</a>
              <p>
                {player.name},{player.position}
              </p>
              <span>{player.comments}</span>
              <DeleteButton DeleteFunction={this.deletePlayer} />
              <div id={"playerinfo" + player.id} hidden>
                {player.id}
              </div>
            </ol>
          );
        })}
      </div>
    );
  }
}
