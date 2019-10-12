import React, { Component } from "react";
// import EditButton from "./Components/EditButton/EditButton";
// import DeleteButton from "./Components/DeleteButton";

export default class PlayerList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { players } = this.state;
    return (
      <div>
        <ol>
          {this.players.map((player, index) => {
            return (
              <li className="player">
                <div>
                  {player.name}, {player.position}
                </div>
                <div>{player.comments}</div>
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
