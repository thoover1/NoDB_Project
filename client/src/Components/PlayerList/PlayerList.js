import React, { Component } from "react";
import "./PlayerList.css";
// import EditButton from "./Components/EditButton/EditButton";
// import DeleteButton from "./Components/DeleteButton";

export default class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      position: "",
      comments: ""
    };
  }
  render() {
    const { players } = this.state;
    return (
      <div>
        <ol>
          {this.players.map((player, index) => {
            return (
              <li className="player">
                <p>
                  {player.name}, {player.position}
                </p>
                <span>{player.comments}</span>
                {/* <EditButton putPlayer={this.putPlayer} />  */}
                {/* <DeleteButton deletePlayer={this.deletePlayer}/> */}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
