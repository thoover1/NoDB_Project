import React, { Component } from "react";

function DeleteFunction(player_id) {
  console.log("DELETE BUTTON CLICKED YO");
  console.log(this);
  console.log(player_id);
  let player_info = document.getElementById("playerinfo1");
  console.log(player_info);
}

class DeleteButton extends Component {
  deletePlayerFn() {
    console.log("*****************************************************");
  }
  render() {
    // console.log("899999999999999999999999999");
    // console.log(this);
    return (
      <div>
        <button onClick={DeleteFunction}>Delete</button>
      </div>
    );
  }
}
export default DeleteButton;
