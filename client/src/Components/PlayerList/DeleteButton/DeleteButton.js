import React, { Component } from "react";

class DeleteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      position: "",
      comments: ""
    };
  }

  deletePlayer() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <button onClick={() => this.deletePlayer()}>Delete Player</button>
      </div>
    );
  }
}
export default DeleteButton;
