import React, { Component } from "react";
import "./PlayerList.css";
// import EditButton from "./EditButton/EditButton";
import DeleteButton from "./DeleteButton/DeleteButton";

export default class PlayerList extends Component {
  render() {
    const mappedPlayers = this.props.getPlayers;
    return (
      <div className="allPlayers">
        {mappedPlayers.map(player => {
          return (
            <ol className="player">
              {/* TO DO: link each player ID using href */}
              <a className="player_list_numbering">{player.id}</a>
              <p>
                {player.name},{player.position}
              </p>
              <span>{player.comments}</span>
              <DeleteButton />
              {/* <EditButton /> */}
            </ol>
          );
        })}
      </div>
    );
  }
}
